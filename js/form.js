const btn = document.querySelector('#btn-mostra-senha');

btn.addEventListener('click', function () {
    const input = document.querySelector('#password');
    const img = document.querySelector('#img-olho');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        img.src = "../img/olho-aberto.svg";
    } else {
        input.setAttribute('type', 'password');
        img.src = "../img/olho.svg";
    }
});

const prePassword = document.querySelector('#prePassword');

function validateInput(input, span) {
    inputError(false, input, span);
}

function exitInput(input, span) {
    function validateEmail(email) {
        let patern = /\S+@\S+\.\S+/;
        return patern.test(email);
    }

    function validateTel(tel) {
        let patern = /[0-9]{2}([0-9]{8}|[0-9]{9})/;
        return patern.test(tel)
    }

    if (input.type == 'email') {
        if (validateEmail(input.value) === false) {
            span.innerHTML = '<strong>⚠️ Erro:</strong> Endereço de email inválido, deve conter um "@email.com"';
            inputError(true, input, span);
        } 
    }

    if (input.type == 'tel') {
        if (validateTel(input.value) === false) {
            span.innerHTML = '<strong>⚠️ Erro:</strong> Numero de telefone inválido, deve conter um "(ddd) 8+"';
            inputError(true, input, span);
        } 
    }

    if (prePassword) {
        if ((input.id == 'password') && prePassword.value != input.value) { 
            inputError(true, input, span);
        }
    }

    if (input.id == 'password') {
        if (input.value.length < input.minLength) {
            inputError(true, input, span);
        } 
    }

    if (input.id == 'usuario') {
        if (input.value.length < input.minLength) {
            inputError(true, input, span);
        } 
    }
    
    if ((input.id == 'prePassword') && (input.value.length < input.minLength)) {
        inputError(true, input, span);
    } 
}

function inputError(erro, input, span) {
    if (erro === true) {
        input.classList.add('error');
        span.classList.add('error');
    } else {
        input.classList.remove('error');
        span.classList.remove('error');
    }
}

function inputTroca(button, input) {
    if (input.type == 'email') {
        input.type = 'tel';
        input.placeholder = 'Telefone';
        button.innerHTML = 'Não possui telefone?'
    } else {
        input.type = 'email';
        input.placeholder = 'Email';
        button.innerHTML = 'Não possui email?'
    }
}