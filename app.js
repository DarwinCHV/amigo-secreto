// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
let lista="";

// Funcion para agregar el nombre del amigo a un array.
function agregarAmigo(){

    // Guarda el nombre ingresado en una variable.
    let nombreAmigo = document.getElementById('amigo').value;

    //Valida si lo guardado no está vacío.
    if (nombreAmigo != ""){

        // Verifica si el nombre ya existe en el array.
        if (amigos.includes(nombreAmigo)){

            // Si el nombre ya existe, muestra un mensaje de alerta.
            alert("El amigo ya se encuentra en la lista");
        }else{

        //Si lo guardado no está vacío y  no está en el array, agrega el nombre al array.
        amigos.push(nombreAmigo);

        //Funcion para listar los amigos agregados en el array.
        listarAmigos();

        }

    }else{

        // Si la variable "nombreAmigo" está vacía, muestra un mensaje de alerta.
        alert("Por favor, inserte un nombre.");

    }

}

// Funcion para sortear un amigo. 
function sortearAmigo(){

    //Verifica que el array no está vacío.
    if(amigos.length > 0){

        //Si el array no está vacío, se seleccion un indice aleatorio del array.
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        //Se guarda el amigo que se contenia en el indice aleatorio.
        let amigoSecreto= amigos[indiceAleatorio];

        //Se guarda el elemento en una variable.
        let resultadoDelSorteo= document.getElementById('resultado');

        //Muestra el nombre del amigo sorteado en el elemento.
        resultadoDelSorteo.innerHTML = `El amigo secreto sorteado es: ${amigoSecreto}`;

        limpiarCampos();

    }else{

        //Si el array está vacío, muestra un mensaje de alerta.
        alert("No hay amigos para sortear.");

    }

}

function listarAmigos(){

    // Se guarda el elemento en una variable .
    lista= document.querySelector('#listaAmigos');

    limpiarCampos();

    // Recorre el array y agrega como un elemento de lista.
    for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
    }

}


function limpiarCampos(){

    //Limpia el campo de texto para ingresar el nombre del siguiente amigo.
    document.querySelector('#amigo').value="";

    //Limpia la lista de amigos mostrada anteriormente.
    lista.innerHTML="";

}

