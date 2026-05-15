async function register(){

    try{

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const password = document.getElementById("password").value;

        const response = await fetch(
            "http://localhost:3000/register",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    nombre,
                    correo,
                    password
                })

            }
        );

        const data = await response.json();

        if(response.ok){

            alert(data.mensaje);

            window.location.href = "login.html";

        }else{

            const mensaje = document.getElementById("mensaje");

            mensaje.classList.remove("d-none");

            mensaje.innerHTML = data.mensaje;

        }

    }catch(error){

        console.log(error);

    }

}

async function login(){

    try{

        const correo = document.getElementById("correo").value;
        const password = document.getElementById("password").value;

        const response = await fetch(
            "http://localhost:3000/login",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    correo,
                    password
                })

            }
        );

        const data = await response.json();

        if(response.ok){

            localStorage.setItem(
                "nombre",
                data.nombre
            );

            window.location.href = "dashboard.htm";

        }else{

            const mensaje = document.getElementById("mensaje");

            mensaje.classList.remove("d-none");

            mensaje.innerHTML = data.mensaje;

        }

    }catch(error){

        console.log(error);

    }

}