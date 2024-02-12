const feedbackForm = document.querySelector(".feedback-form");
const messageForm = feedbackForm.elements.message;
const emailForm = feedbackForm.elements.email;

const localStorageKey = "feedback-form-state";

let email = "";
let message = "";

if (localStorage.getItem(localStorageKey) !== null) {
    emailForm.value = JSON.parse(localStorage.getItem(localStorageKey)).email;
    email = emailForm.value;
    messageForm.value = JSON.parse(localStorage.getItem(localStorageKey)).message;
    message = messageForm.value;
}

feedbackForm.addEventListener("input", event => {
    event.stopPropagation();
    
    if (event.target.nodeName === "TEXTAREA") {
        message = event.target.value.trim();
    } else {
        email = event.target.value.trim();
    }
    localStorage.setItem(localStorageKey,JSON.stringify({email, message,}));
    email = JSON.parse(localStorage.getItem(localStorageKey)).email;
    message = JSON.parse(localStorage.getItem(localStorageKey)).message;
});

feedbackForm.addEventListener("submit", event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.target;
    
    if (email === "" || message === "") {
        alert('All form fields must be filled in');
    } else{
        console.log({email, message});
        feedbackForm.reset();
        localStorage.removeItem(localStorageKey);
    };
});
