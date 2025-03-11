
//Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados

let amigo = [];

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.

 function agregarAmigo() {
   let inputAmigo = document.getElementById("amigo");
   let nombreAmigo = inputAmigo.value;
   
   if(!nombreAmigo){
      alert("Debes ingresar un nombre");
      return;

    }
    amigo.push(nombreAmigo);
    inputAmigo.value= "";
    inputAmigo.focus();
    actualizarListaAmigos() //sin esto no aparecen por pantalla los nombres de los amigos.
   //console.log(amigo);

  }

  function actualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

   for(let i = 0; i < amigo.length; i++) {
      let item= document.createElement("li")
      item.textContent = amigo[i];
      listaAmigos.appendChild(item)
   }
 }
function sortearAmigo() {
   if(amigo.length == 0){
   alert("No hay amigos para sortear");
   return
   }
    let amigoSorteado = amigo [Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML =`El amigo sorteado es: ${amigoSorteado}`
}
