const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors({
    origin:"*"
}));

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("API funcionando");
});

const db = mysql.createPool({
    host: "db",
    user: "root",
    password: "root",
    database: "sistema",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.getConnection((err, connection) => {

    if(err){

        console.log("Error MySQL:");
        console.log(err);

    } else {

        console.log("MySQL conectado");

        connection.release();

    }

});

app.post("/register", async (req,res)=>{

    console.log(req.body);

    const {nombre, correo, password} = req.body;

    if(!nombre || !correo || !password){

        return res.status(400).json({
            mensaje:"Todos los campos son obligatorios"
        });

    }

    try{

        const hash = await bcrypt.hash(password,10);

        db.query(
            "INSERT INTO usuarios(nombre, correo, password) VALUES(?,?,?)",
            [nombre, correo, hash],
            (err,result)=>{

                if(err){

                    console.log(err);

                    return res.status(500).json({
                        mensaje:"Error al registrar usuario"
                    });

                }

                res.json({
                    mensaje:"Usuario registrado correctamente"
                });

            }
        );

    }catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error del servidor"
        });

    }

});

app.post("/login", (req,res)=>{

    const {correo,password} = req.body;

    if(!correo || !password){

        return res.status(400).json({
            mensaje:"Complete todos los campos"
        });

    }

    db.query(
        "SELECT * FROM usuarios WHERE correo=?",
        [correo],
        async(err,result)=>{

            if(err){

                console.log(err);

                return res.status(500).json({
                    mensaje:"Error del servidor"
                });

            }

            if(result.length === 0){

                return res.status(401).json({
                    mensaje:"Usuario no encontrado"
                });

            }

            const usuario = result[0];

            const valido = await bcrypt.compare(
                password,
                usuario.password
            );

            if(!valido){

                return res.status(401).json({
                    mensaje:"Contraseña incorrecta"
                });

            }

            res.json({
                mensaje:"Login correcto",
                nombre:usuario.nombre
            });

        }
    );

});

app.listen(3000, ()=>{
    console.log("Servidor corriendo en puerto 3000");
});