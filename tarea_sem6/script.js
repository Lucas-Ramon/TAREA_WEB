document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const submitButton = document.getElementById('submitButton');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const ageInput = document.getElementById('age');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const ageError = document.getElementById('ageError');

    function validateName() {
        if (nameInput.value.length < 3) {
            nameInput.classList.add('invalid');
            nameInput.classList.remove('valid');
            nameError.textContent = 'El nombre debe tener al menos 3 caracteres.';
            return false;
        } else {
            nameInput.classList.add('valid');
            nameInput.classList.remove('invalid');
            nameError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            emailError.textContent = 'Formato de correo electrónico inválido.';
            return false;
        } else {
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
            emailError.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordPattern.test(passwordInput.value)) {
            passwordInput.classList.add('invalid');
            passwordInput.classList.remove('valid');
            passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres, un número y un carácter especial.';
            return false;
        } else {
            passwordInput.classList.add('valid');
            passwordInput.classList.remove('invalid');
            passwordError.textContent = '';
            return true;
        }
    }

    function validateConfirmPassword() {
        if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordInput.classList.add('invalid');
            confirmPasswordInput.classList.remove('valid');
            confirmPasswordError.textContent = 'Las contraseñas no coinciden.';
            return false;
        } else {
            confirmPasswordInput.classList.add('valid');
            confirmPasswordInput.classList.remove('invalid');
            confirmPasswordError.textContent = '';
            return true;
        }
    }

    function validateAge() {
        if (ageInput.value < 18) {
            ageInput.classList.add('invalid');
            ageInput.classList.remove('valid');
            ageError.textContent = 'Debes ser mayor de 18 años.';
            return false;
        } else {
            ageInput.classList.add('valid');
            ageInput.classList.remove('invalid');
            ageError.textContent = '';
            return true;
        }
    }

    function validateForm() {
        const isValidName = validateName();
        const isValidEmail = validateEmail();
        const isValidPassword = validatePassword();
        const isValidConfirmPassword = validateConfirmPassword();
        const isValidAge = validateAge();

        if (isValidName && isValidEmail && isValidPassword && isValidConfirmPassword && isValidAge) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);
    ageInput.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado con éxito.');
    });
});