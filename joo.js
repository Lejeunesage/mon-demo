'use strict';
class Request {
  /**
   *  fonction qui prend comme paramètre un tableau
   *  itérer le tableau
   *  récupérer les valeurs dans chaque element du tableau
   */
  getInputs(tableau) {
    for (let i = 0; i < tableau.length; i++) {
      console.log(tableau[i].value);
    }
  }

  getFullName(tableau) {
    let fname = "";
    let lname = "";
    let age = "";
    for (let i = 0; i < tableau.length; i++) {
      if(tableau[i].id === "lname") {
        lname = tableau[i].value;
      }
      if (tableau[i].id === "name") {
        fname += tableau[i].value + " ";
      }
      if (tableau[i].id === "age") {
        age += tableau[i].value + " ";
      }
    }
    return `Bonjour je m'appelle ${lname} ${fname}  j'ai  ${age} ans. `
  }
}


document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");
  let inputs = document.querySelectorAll(".input");

  form.addEventListener("submit", function (event) {
    // empêcher le rechargement de la page
    event.preventDefault();
    // instancié un objet de la classe Request
    let inp = new Request();
    // appel la méthode getInputs() de l'objet créé
    let answers =  inp.getFullName(inputs);

    /***********************************************/

    console.log(answers);
  addElement(answers);
  })
});

function addElement (Content) {
  console.log("Création de ...")
  // crée un nouvel élément div
  let newDiv = document.createElement("div");
  // et lui donne un peu de contenu
  let newContent = document.createTextNode(Content);
  // ajoute le nœud texte au nouveau div créé
  newDiv.appendChild(newContent);

  // ajoute le nouvel élément créé et son contenu dans le DOM
  let currentDiv = document.getElementById('div1');
  document.body.insertBefore(newDiv, currentDiv);

}

