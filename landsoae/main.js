// const inputGroup = document.querySelector('.input-group');
// const menuItem = document.querySelector('.MenuItem');
// const countryName = document.querySelector('.country-name');
// const countryFlag = document.querySelector('.country-flag');
// const countryCode = document.querySelector('.country-code');
// const input = document.querySelector('.form-control');
// const backDrop = document.querySelector('.backdrop');
// const menuContainer = document.querySelector('.menu-container');
// const arrow = document.querySelector('.css-icon-down');
// const openClasses = ["open", "shown"];

// input.addEventListener('click', () => {
//     console.log('input click');
//    if (!menuContainer.classList.contains.apply(menuContainer.classList, ['open', 'shown'])) {
//        menuContainer.classList.add.apply(menuContainer.classList, ['open', 'shown']);
//        arrow.classList.add('open');
//        backDrop.style.display = 'block'
//    }
// });

// backDrop.addEventListener('click', () => {
//     if (backDrop.style.display === 'block') {
//         backDrop.style.display = 'none';
//         menuContainer.classList.remove.apply(menuContainer.classList, ['open', 'shown']);
//         arrow.classList.remove('open');
//     }
// });

let form = document.querySelector('form');
let input = document.querySelector('#sign-in-phone-number');
let button = document.querySelector('.btn-primary');

input.oninput = () => {
    input.value = input.value.replace(/[^0-9]/, '');

    if (input.value.substr(0, 2) === '05') {
        input.setAttribute('maxlength', '10');
    } else if (input.value.substr(0, 3) === '971') {
        input.setAttribute('maxlength', '12');
    } else {
        input.setAttribute('maxlength', '9');
    }
}

form.onsubmit = (e) => {
    e.preventDefault();

    let inputArray = input.value.split('');
    let inputArrayUnique = unique(inputArray);

    if (inputArrayUnique.length < 5 || input.value.indexOf('12345') > -1) {
        phoneError();
        return;
    }

    button.setAttribute('disabled', 'disabled');
    form.submit();
}

function unique(array) {
    let unique = [];

    array.forEach(el => {
        if (!unique.includes(el)) {
            unique.push(el);
        }
    });

    return unique;
}

function phoneError() {
    document.querySelector('.error').innerHTML = 'Check your number format and try again';
}

input.addEventListener('input', function () {
    if (input.value.length <= 5 ) {
        button.style.visibility = 'hidden'
    }
    else   {
        button.style.visibility = 'visible'
    }
})