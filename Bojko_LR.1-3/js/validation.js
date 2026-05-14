"use strict";

function validateEmail(email) {
    return email.includes("@");
}

function validateAge(age) {
    return age > 0 && age < 100;
}

function validateInputs(data) {

    if (!data.fullName) {
        alert("Введіть ім'я");
        return false;
    }

    if (!validateEmail(data.email)) {
        alert("Невірний email");
        return false;
    }

    if (!validateAge(data.age)) {
        alert("Невірний вік");
        return false;
    }

    return true;
}