document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('username');
    const spans = document.querySelectorAll('.text span');
    inputField.addEventListener('focus', function() {
        if (inputField.value === '') {
            spans.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, index * 10); // 每个span依次延迟100毫秒
            });
        }
    });

    inputField.addEventListener('blur', function() {
        if (inputField.value === '') {
            spans.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active');
                }, index * 10); // 每个span依次延迟100毫秒
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const inputField1 = document.getElementById('password');
    const spans1 = document.querySelectorAll('.password-text span');
    inputField1.addEventListener('focus', function() {
        if (inputField1.value === '') {
            spans1.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, index * 10); 
            });
        }
    });

    inputField1.addEventListener('blur', function() {
        if (inputField1.value === '') {
            spans1.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active');
                }, index * 10); 
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('login-btn');
    
    button.addEventListener('click', function() {
        const mask=document.getElementById('mask');
        const loginForm= document.getElementById('login-form');
        const Masklogin= document.getElementById('mask-login');
        const registerForm= document.getElementById('register-form');
        const Maskregister= document.getElementById('mask-register');
        
        mask.classList.add('active');
        loginForm.classList.add('active');
        Masklogin.classList.add('active');
            registerForm.classList.add('active');
            Maskregister.classList.add('active');

    });
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('register-btn');
    
    button.addEventListener('click', function() {
        const mask=document.getElementById('mask');
        const loginForm= document.getElementById('login-form');
        const Masklogin= document.getElementById('mask-login');
        const registerForm= document.getElementById('register-form');
        const Maskregister= document.getElementById('mask-register');
        
        mask.classList.remove('active');
        loginForm.classList.remove('active');
        Masklogin.classList.remove('active');
        registerForm.classList.remove('active');
         Maskregister.classList.remove('active');
    });
});
window.addEventListener('DOMContentLoaded', function() {
    let loadElement = document.getElementById('load');
    loadElement.style.display = 'flex';
    let viewWidth = window.innerWidth;
    let intervalId = setInterval(function() {
        let loadWidth = parseFloat(window.getComputedStyle(loadElement).width);
        if (loadWidth >= viewWidth-2) {
            loadElement.style.display = 'none';
            clearInterval(intervalId); 
        }
    }, 2500);
});
