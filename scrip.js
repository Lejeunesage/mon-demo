let myfirstName = document.querySelector('.firstName');
let mylastName = document.querySelector('.lastName');
let myAge = document.querySelector('.myAge');
let bouton = document.querySelector('.bouton');


class Request{
    getInputs(){

    console.log("Bonjour je m'appelle " + myfirstName.value+" " + mylastName.value + " j'ai "+  myAge.value + " ans.");
    }

}

let request = new Request();

bouton.addEventListener('click', function(events){
    events.preventDefault();
    request. getInputs();

})

