"use strict";

import {
    greet,
    sumAll,
    multiply,
    average,
    mergeArrays,
    formatUser
} from "./utils.js";

import {
    user,
    designSkills,
    codingSkills,
    appSettings
} from "./data.js";

console.log("ES6+ модулі успішно підключені!");

/**
 * Деструктуризація
 */

const { name, profession } = user;

console.log(`${name} працює як ${profession}`);

/**
 * Виведення інформації
 */

const userInfo = document.getElementById("userInfo");

userInfo.innerHTML = formatUser(user);

/**
 * Rest оператор
 */

const total = sumAll(5, 15, 25, 35);

/**
 * Arrow functions
 */

const multiplication = multiply(7, 9);

/**
 * Середнє значення
 */

const avg = average(10, 20, 30, 40);

/**
 * Виведення результатів
 */

document.getElementById("sumResult").textContent = total;

document.getElementById("multiplyResult").textContent = multiplication;

document.getElementById("averageResult").textContent = avg;

/**
 * Spread оператор
 */

const allSkills = mergeArrays(designSkills, codingSkills);

document.getElementById("arrayResult").textContent =
    `[ ${allSkills.join(" • ")} ]`;

/**
 * Конфігурація
 */

document.getElementById("configInfo").innerHTML = `
    <p><strong>Назва:</strong> ${appSettings.getProjectName()}</p>
    <p><strong>Версія:</strong> ${appSettings.version}</p>
    <p><strong>Тема:</strong> ${appSettings.theme}</p>
`;

/**
 * Default parameters
 */

console.log(greet());
console.log(greet(name));

/**
 * Деструктуризація масиву
 */

const [firstSkill, secondSkill, ...otherSkills] = allSkills;

console.log("Перша навичка:", firstSkill);
console.log("Друга навичка:", secondSkill);
console.log("Інші навички:", otherSkills);