const feedbackForm = document.querySelector(".feedback-form");
const messageForm = feedbackForm.elements.message;
const emailForm = feedbackForm.elements.email;

const localStorageKey = "feedback-form-state";

if (localStorage.getItem(localStorageKey) !== null) {
    emailForm.value = JSON.parse(localStorage.getItem(localStorageKey)).email;
    messageForm.value = JSON.parse(localStorage.getItem(localStorageKey)).message;
}

feedbackForm.addEventListener("input", event => {
    event.stopPropagation();

    const email = emailForm.value.trim();
    const message = messageForm.value.trim();

    localStorage.setItem(localStorageKey,JSON.stringify({email, message,}));
});

feedbackForm.addEventListener("submit", event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.target;

    const email = emailForm.value;
    const message = messageForm.value;
    
    if (email === "" || message === "") {
        alert('All form fields must be filled in');
    } else{
        console.log({email, message});
        feedbackForm.reset();
        localStorage.removeItem(localStorageKey);
    };
});
