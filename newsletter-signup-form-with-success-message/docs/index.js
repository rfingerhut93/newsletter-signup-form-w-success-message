const containerEl = document.getElementById('card');
const leftEl = document.getElementById('text-container');
const rightEl = document.getElementById('img-container');

const userEmailEl = document.getElementById('user-email');
const invalidEmailEl = document.getElementById('invalid-email');
const emailInputEl = document.getElementById('email');
const signupButtonEl = document.getElementById('signup-button');

const confirmedMessageEl = document.getElementById('confirm-message');
const dismissMessageEl = document.getElementById('dismiss-message');

function formSuccess() {
    confirmedMessageEl.classList.add('active');
    containerEl.classList.add('success');
    leftEl.style.display = 'none';
    rightEl.style.display = 'none';
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

signupButtonEl.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInputEl.value.trim();

    if (validateEmail(email)) {
        formSuccess();
        userEmailEl.innerText = email;
        emailInputEl.value = '';
        invalidEmailEl.classList.remove('active');
        emailInputEl.classList.remove('active');
           
    } else {
        invalidEmailEl.classList.add('active');
        emailInputEl.classList.add('active');
    }
})

dismissMessageEl.addEventListener('click', () => {
    leftEl.style.display = 'block';
    rightEl.style.display = 'block';
    containerEl.classList.remove('success');
    confirmedMessageEl.classList.remove('active');
})