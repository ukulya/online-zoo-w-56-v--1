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
const btnSocial = document.querySelectorAll('.btn-social');
const nav = document.querySelector('.nav-tabs');
const body = document.querySelector('body');
const formSignUp = document.querySelector('.form-signin');
const formLogin = document.querySelector('.form-login');
const signup_user_email = document.querySelector('#user-email');
const signup_user_name = document.querySelector('#user-name');
const signup_user_password = document.querySelector('#user-password');
const signup_user_checkbox = document.querySelector('#checkbox');
const signup_user_btn = document.querySelector('#signup-user-btn');
const user_email = document.querySelector('#email');
const user_password = document.querySelector('#password');
const user_login_btn = document.querySelector('#login-user-btn');
const sendBtn = document.querySelectorAll('.send-btn');

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

const closeModal = ()=>{
    modal.classList.remove('active');
    modalBackdrop.classList.remove('active');
    body.classList.remove('active');
}

btnSignUpModal.addEventListener('click', showModal);
btnLoginModal.addEventListener('click', showModal);
modalBackdrop.addEventListener('click', closeModal);
sendBtn.forEach(elem =>{
    elem.addEventListener('click', (e)=>{
        e.preventDefault();
        document.querySelectorAll('.hidden-md').forEach(item => {
            item.classList.add('d-none');
        });
        document.querySelector('.visible-md').classList.add('d-block');
        if (e.target.getAttribute('id') === 'signup-user-btn'){
            document.querySelector('.tooltip-user-name').textContent = signup_user_name.value;
        } else {
            document.querySelector('.tooltip-user-name').textContent = 'user'
        }
        //console.log(signup_user_name.value);
        //console.log(user_email.value);
    });

});

btnSocial.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        if (e.target.parentElement.classList.contains('google-login')){
            document.querySelector('.tooltip-user-name').textContent = 'Logged in with Google'
        } else {
            document.querySelector('.tooltip-user-name').textContent = 'Logged in with Facebook'
        }
        document.querySelectorAll('.hidden-md').forEach(item => {
            item.classList.add('d-none');
        });
        document.querySelector('.visible-md').classList.add('d-block');
        closeModal();
    });
});

signup_user_btn.addEventListener('click', closeModal);

nav.addEventListener('click', function (e) {
    document.querySelectorAll('.nav-link').forEach(item => {
        item.classList.remove('active')
    });
    document.querySelectorAll('.tab-pane').forEach(item => {
        item.classList.toggle('active')
    });
    e.target.classList.add('active');
});

const validate = ()=>{
    user_login_btn .disabled = !(user_email.validity.valid && user_password.validity.valid);
    if (user_email.value === 'user@gmail.com' && user_password.value === 'useruser'){
        document.querySelector('.warning').classList.remove('active');
    } else {
        document.querySelector('.warning').classList.add('active');
    }
    signup_user_btn.disabled = !(signup_user_email.validity.valid &&
        signup_user_name.validity.valid &&
        signup_user_password.value.length >= 8 &&
        signup_user_checkbox.checked);
}
formSignUp.addEventListener('input', validate);
formLogin.addEventListener('input', validate);

user_login_btn.addEventListener('click',()=>{

    if (user_email.value === 'user@gmail.com' && user_password.value === 'useruser'){
        closeModal();
    } else {
        document.querySelector('.warning').classList.add('active');
    }
})

document.querySelector('.user-btn').addEventListener('click',()=>{
    document.querySelector('.logout').classList.add('d-block')
});
document.querySelector('.logout').addEventListener('click',(e)=>{
    document.querySelectorAll('.hidden-md').forEach(item => {
        item.classList.remove('d-none');
    });
    document.querySelector('.visible-md').classList.remove('d-block');
    console.log(this)
    e.target.parentElement.classList.remove('d-block');
});

// auto carousel testimonials
let sliderIndex = 1;

let myTimer;

let slideshowContainer;

window.addEventListener("load",function() {
    showSlides(sliderIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('section-testimonials')[0];
    //console.log(slideshowContainer)
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
    let slides = document.querySelectorAll(".mySlides");
    console.log(slides);
    slides.forEach(slide =>{
        /*slide.addEventListener('click', ()=>{
            pause();
            resume();
        });*/
        //slide.addEventListener('mouseleave', resume);
        slide.addEventListener('click', resume);
    });

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

/*pause = () => {
    clearInterval(myTimer);
}*/

resume = () =>{
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(sliderIndex)}, 30000);
}

