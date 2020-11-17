const button = document.querySelector("#button");
const name = document.querySelector('#nome');
const email = document.querySelector('#email');

// validação quando clicado o botão
button.onclick = () => {
    // checa se nome e/ou email não estão em branco
    if (name.value == "" || email.value == "") {
       return alert("Por favor digite seu nome e email.")
    } else {
        // checa se email e nome são válidos
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value) && 
        /(\w.+\s).+/i.test(name.value)) {
            // se tudo ok
            return window.open("Gestão do Tempo.xlsx");
    } else {
        // se não forem válidos
        return alert("Por favor coloque seu nome e sobrenome e um email válido");
    }
}}
