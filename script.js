const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const addressInput = document.getElementById('addressInput');
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton');
const successText = document.getElementById('successText');
const userName = document.getElementById('userName');

const userData = {};
let count = 0;

nextButton.addEventListener('click', function () {
    if (!nameInput.value) {
        count = 0;
        alert("Please enter your name.")
    }

    if (nameInput.value && !emailInput.value && nameInput.value.trim() !== "" && !count) {
        count++;
        nameInput.style.display = 'none';
        emailInput.style.display = 'block';
    } else if (emailInput.value && emailInput.value.trim() !== "") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(emailInput.value)) {
            emailInput.style.display = 'none';
            addressInput.style.display = 'block';
        } else {
            alert('Please enter a valid email address.');
            return;
        }
    } else if (count === 1 && nameInput.value && !emailInput.value) {
        alert("Please enter your email.")
    }
    if (nameInput.value && emailInput.value) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
    }
});

submitButton.addEventListener('click', function() {
    userData.name = nameInput.value;
    userData.email = emailInput.value;
    userData.address = addressInput.value;
    addressInput.style.display = 'none';
    successText.style.display = 'block';
    submitButton.style.display = 'none';
    userName.textContent = userData.name;

    console.log(userData, 'userData');
});