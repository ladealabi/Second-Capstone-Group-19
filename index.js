const menu = document.querySelector('.menu');
const mobileNav = document.querySelector('#mobileNav');
const cancel = document.querySelector('.cancel'); 
const passwordError = document.querySelector('.error');
const form = document.querySelector('form');

menu.addEventListener('click', () => {
    mobileNav.style.display = 'flex'
})

cancel.addEventListener('click', () => {
    mobileNav.style.display = 'none'
})

const togglePassword1 = document.querySelector('#togglePassword1');
const password1 = document.querySelector('#exampleInputPassword1');

togglePassword1.addEventListener('click', function (e) {
    const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type);

    this.classList.toggle('fa-eye-slash');
});

const togglePassword2 = document.querySelector('#togglePassword2');
const password2 = document.querySelector('#exampleInputPassword2');

togglePassword2.addEventListener('click', function (e) {
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);

    this.classList.toggle('fa-eye-slash');
});

password2.addEventListener('focusout', function (e){
    if(password1.value !== password2.value){
        passwordError.style.display = 'block';
    } else{
        passwordError.style.display = 'none';
    }
})

form.addEventListener('submit', function(e){
    if(password1.value !== password2.value){
        e.preventDefault()
    }
})

