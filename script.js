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

// Execute a function when the user releases a key on the keyboard
name.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      button.click();
    }
  });

// Execute a function when the user releases a key on the keyboard
email.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      button.click();
    }
  });
