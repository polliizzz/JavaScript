"use strict";

/**
 * Дані користувача
 */

export const user = {
    name: "Софія",
    age: 20,
    city: "Одеса",
    profession: "UI Designer"
};

export const designSkills = [
    "Figma",
    "Photoshop",
    "Illustrator"
];

export const codingSkills = [
    "HTML",
    "CSS",
    "JavaScript"
];

const theme = "pink";
const version = "3.1.0";

export const appSettings = {
    theme,
    version,

    getProjectName() {
        return "Pink ES6+ Library";
    }
};