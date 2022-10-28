export class Request {
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
      for (let i = 0; i < tableau.length; i++) {
        if(tableau[i].id === "lname") {
          lname = tableau[i].value;
        }
        if (tableau[i].id === "name") {
          fname += tableau[i].value + " ";
        }
      }
      console.log(lname, fname);
    }
  }