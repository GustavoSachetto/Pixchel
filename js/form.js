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

// function validandoInput(input, span) {

//     function validandoEmail(email) {
//         var patern = /\S+@\S+\.\S+/;
//         return patern.test(email);
//     }
 
//     function error(erro) {
//         if (erro === true) {
//             input.classList.add('error');
//             span.classList.add('error');
//         } else {
//             input.classList.remove('error');
//             span.classList.remove('error');
//         }
//     }

//     if (input.type == 'email') {
//         if (validandoEmail(input.value) === false) {
//             error(true);
//         } else {
//             error(false);
//         }
//     }
    
//     if (input.id == 'password') {
//         if (input.value.length < input.minLength) {
//             error(true);
//         } else {
//             error(false);
//         }
//     }    
// }

function noInputError(input, span) {
    inputError(false, input, span);
}

function validateInput(input, span) {

    function validateEmail(email) {
        var patern = /\S+@\S+\.\S+/;
        return patern.test(email);
    }

    if (input.type == 'email') {
        if (validateEmail(input.value) === false) {
            inputError(true, input, span);
        } 
    }
    
    if (input.id == 'password') {
        if (input.value.length < input.minLength) {
            inputError(true, input, span);
        } 
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



