//document.addEventListener('DOMContentLoaded', function() {
const btnSignUpModal = document.querySelector('.signup-btn');
const btnLoginModal = document.querySelector('.login-btn');
const modal = document.querySelector('.modal');
const linkLogin = document.querySelector('.login-link');
const linkAccount = document.querySelector('.account-link');
const modalBackdrop = document.querySelector('.modal-backdrop');
const tabAccount = document.querySelector('#account');
const tabLogin = document.querySelector('#login');
const socialLogin = document.querySelector('.social-login');
const socialSignUp = document.querySelector('.social-signup');
const nav = document.querySelector('.nav-tabs');
const body = document.querySelector('body');
const formSignUp = document.querySelector('.form-signin');
const formLogin = document.querySelector('.form-login');

const showModal = function (e) {
    e.preventDefault();
    body.classList.add('active');
    modal.classList.add('active');
    modalBackdrop.classList.add('active');
    //console.log(e.target);
    if (e.target.classList.contains('login-btn')) {
        linkLogin.classList.add('active');
        tabLogin.classList.add('active');
        linkAccount.classList.remove('active');
        tabAccount.classList.remove('active');
    } else {
        linkLogin.classList.remove('active');
        tabLogin.classList.remove('active');
        linkAccount.classList.add('active');
        tabAccount.classList.add('active');
    }

}

btnSignUpModal.addEventListener('click', showModal);
btnLoginModal.addEventListener('click', showModal);

modalBackdrop.addEventListener('click', function () {
    modal.classList.remove('active');
    this.classList.remove('active');
    body.classList.remove('active');
});

nav.addEventListener('click', function (e) {
    //console.log(e.target);
    //console.log(this)
    document.querySelectorAll('.nav-link').forEach(item => {
        item.classList.remove('active')
    });
    document.querySelectorAll('.tab-pane').forEach(item => {
        item.classList.toggle('active')
    });
    e.target.classList.add('active');
    //this.children.classList.toggle('active');
    //console.log(this.children);
    // e.target.closest('.nav-link').classList.toggle('active')
});

socialLogin.addEventListener('click', function (e) {
    //console.log(e.target);
    if (e.target.classList.contains('google-login')) {

    }
});
/*
inputsLogin.forEach(item => {
    console.log(item)
    item.addEventListener('keyup',function (){
        if (email.value.length > 0 && name.value.length > 0 && password.value.length >= 8 && checkbox.checked){
            btnSend.removeAttribute('disabled')
        }
    });
});*/

const signup_user_email = document.querySelector('#user-email');
//console.log(signup_user_email); // <input type="email" class="form-control" id="user-email" required autocomplete="off">
//const signup_user_email = document.getElementById('user-email');
//console.log(signup_user_email); // <input type="email" class="form-control" id="user-email" required autocomplete="off">
const signup_user_name = document.querySelector('#user-name');
const signup_user_password = document.querySelector('#user-password');
const signup_user_checkbox = document.querySelector('#checkbox');
const signup_user_btn = document.querySelector('#signup-user-btn');

// from Shalyapin

const validate = ()=>{
    // simplified
    signup_user_btn.disabled = !(signup_user_email.validity.valid &&
        signup_user_name.validity.valid &&
        signup_user_password.validity.valid &&
        signup_user_checkbox.checked);
    /*if (
        signup_user_email.validity.valid &&
        signup_user_name.validity.valid &&
        signup_user_password.validity.valid &&
        signup_user_checkbox.checked
    ) {
        //signup_user_btn.classList.remove('invalid');
        signup_user_btn.disabled = false;
    } else {
        //signup_user_btn.classList.add('invalid');
        signup_user_btn.disabled = true;
    }*/

}
formSignUp.addEventListener('input', validate);
/*signup_user_email.addEventListener('input',()=>{
    validate();
});
signup_user_name.addEventListener('input',()=>{
    validate();
});
signup_user_password.addEventListener('input',()=>{
    validate();
});
signup_user_checkbox.addEventListener('input',()=>{
    validate();
});*/

/*if (signup_user_email.value > 0 && signup_user_name.value > 0 && signup_user_password.value >= 8 && signup_user_checkbox.checked) {
    signup_user_btn.disabled = false;
}*/

/*const validateSignUpForm = function (){
    if (signup_user_email.value > 0){
        alert('mail true')
    }
    if (signup_user_name.value > 0){
        alert('name true')
    }
    if (signup_user_email.value > 0 && signup_user_name.value > 0 && signup_user_password.value >= 8 && signup_user_checkbox.checked){
        signup_user_btn.disabled = false;
    }
};
validateSignUpForm();*/

/*formSignUp.addEventListener('input', function (e) {
    //validateSignUpForm();
    if (signup_user_email.value > 0 && signup_user_name.value > 0 && signup_user_password.value >= 8 && signup_user_checkbox.checked) {
        signup_user_btn.disabled = false;
    }
});*/

const user_email = document.querySelector('#email');
const user_password = document.querySelector('#password');
const user_login_btn = document.querySelector('#login-user-btn');
//console.log(user_email.value);
//console.log(user_email.value.length);
if (user_email.value.length > 0 && user_password.value.length > 0) {
    user_login_btn.disabled = false;
}
formLogin.addEventListener('submit', function (e) {
    e.preventDefault();
    if (user_email.value === 'user@gmail.com' && user_password.value === 'useruser') {
        //alert('true');
        //btnSend.removeAttribute('disabled');
        //user_login_btn.disabled = false;

    } else {
        alert('Неправильно заполнены поля!')
    }
});
/*formLogin.addEventListener('input',function (e){
    //console.log(this);
    //let input = e.target;
    //console.log(input);
    //console.log(input.type);
    //let user_email = this.querySelector('#email');
    //console.log(user_email);
    //let user_password = this.querySelector('#password');
    //let btnSend = this.querySelector('.send-btn');
    if (user_email.value > 0 && user_password.value > 0){
        user_login_btn.disabled = false;
    }
    /!*if (user_email.value === 'user@gmail.com' && user_password.value === 'useruser'){
        //alert('true');
        //btnSend.removeAttribute('disabled');
        //user_login_btn.disabled = false;

    } else {
        alert('Неправильно заполнены поля!')
    }*!/
});*/
/*formLogin.addEventListener('focus',function (e){
    console.log(e.target)
    if (e.target.value !== 'user@gmail.com' || e.target.value !== 'useruser'){
        alert('Неправильно заполнены поля!')
    } else {
        //alert('Неправильно заполнены поля!')
    }
});*/
/*
const user_email = formLogin.querySelector('#email');
const user_password = formLogin.querySelector('#password');
if (user_email.value === 'user@gmail.com' && user_password.value === 'useruser'){
    alert('true')
    btnSend.removeAttribute('disabled');
};*/

// auto carousel testimonials
let sliderIndex = 1;

let myTimer;

let slideshowContainer;

window.addEventListener("load",function() {
    showSlides(sliderIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('section-testimonials')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
    clearInterval(myTimer);
    if (n < 0){
        showSlides(sliderIndex -= 1);
    } else {
        showSlides(sliderIndex += 1);
    }

    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    if (n === -1){
        myTimer = setInterval(function(){plusSlides(n + 2)}, 10000);
    } else {
        myTimer = setInterval(function(){plusSlides(n + 1)}, 10000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 10000);
    showSlides(sliderIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {sliderIndex = 1}
    if (n < 1) {sliderIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[sliderIndex-1].style.display = "flex";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () =>{
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(sliderIndex)}, 30000);
}

//});