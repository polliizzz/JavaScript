"use strict";

/**
 * Utility functions
 */

// Default parameter
export const greet = (name = "Гостя") => {
    return `Привіт, ${name}!`;
};

// Rest operator
export const sumAll = (...numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
};

// Arrow function
export const multiply = (a, b) => a * b;

// Average
export const average = (...numbers) => {
    return sumAll(...numbers) / numbers.length;
};

// Spread operator
export const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

// Template literals + destructuring
export const formatUser = ({ name, age, city, profession }) => {
    return `
        <p><span class="user-name">${name}</span></p>
        <p>Вік: ${age}</p>
        <p>Місто: ${city}</p>
        <p>Професія: ${profession}</p>
    `;
};