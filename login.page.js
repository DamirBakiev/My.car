document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form1');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('Email');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    const ageField = document.getElementById('Age');
    const submitBtn = document.getElementById('submitBtnImage');
  
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('EmailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
  
    function validateName() {
      const name = nameField.value;
      const nameRegex = /^[A-Za-zА-Яа-яЁёІі\s-]+$/;
      if (!nameRegex.test(name)) {
        nameField.classList.add('error');
        nameError.textContent = 'Имя введено неправильно!';
      } else {
        nameField.classList.remove('error');
        nameError.textContent = '';
      }
    }
  
    function validateEmail() {
      const email = emailField.value;
      const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        emailField.classList.add('error');
        emailError.textContent = 'Неверный Email!';
      } else {
        emailField.classList.remove('error');
        emailError.textContent = '';
      }
    }
  
    function validatePassword() {
      const password = passwordField.value;
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(password)) {
        passwordField.classList.add('error');
        passwordError.textContent = 'Пароль должен содержать хотя бы 8 символов, 1 цифру и 1 заглавную букву';
      } else {
        passwordField.classList.remove('error');
        passwordError.textContent = '';
      }
    }
  
    function validateConfirmPassword() {
      if (confirmPasswordField.value !== passwordField.value) {
        confirmPasswordField.classList.add('error');
        confirmPasswordError.textContent = 'Пароли не совпадают!';
      } else {
        confirmPasswordField.classList.remove('error');
        confirmPasswordError.textContent = '';
      }
    }
  
    function checkFormValidity() {
      if (
        !nameField.classList.contains('error') &&
        !emailField.classList.contains('error') &&
        !passwordField.classList.contains('error') &&
        !confirmPasswordField.classList.contains('error') &&
        nameField.value && emailField.value && passwordField.value && confirmPasswordField.value
      ) {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    }
  
    nameField.addEventListener('input', () => {
      validateName();
      checkFormValidity();
    });
  
    emailField.addEventListener('input', () => {
      validateEmail();
      checkFormValidity();
    });
  
    passwordField.addEventListener('input', () => {
      validatePassword();
      checkFormValidity();
    });
  
    confirmPasswordField.addEventListener('input', () => {
      validateConfirmPassword();
      checkFormValidity();
    });
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Проверка возраста
      const age = parseInt(ageField.value, 10);
      if (isNaN(age) || age < 18) {
        alert("Вы должны быть старше 18 лет!");
        return;
      }
  
      // Сохраняем в localStorage
      const userData = {
        name: nameField.value.trim(),
        email: emailField.value.trim(),
        password: passwordField.value,
        age: age
      };
  
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(userData);
      localStorage.setItem('users', JSON.stringify(users));
  
      // Анимация и переход
      form.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = 'project.html';
      }, 500);
    });
  });

  
