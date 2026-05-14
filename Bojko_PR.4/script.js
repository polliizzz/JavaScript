"use strict";

console.log("Практична робота №4 підключена");

const taskInput = document.getElementById("taskInput");

const addTaskButton = document.querySelector("#addTask");

const taskList = document.getElementById("taskList");

console.log(taskInput);
console.log(addTaskButton);
console.log(taskList);

function createTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Введіть текст завдання!");

        return;
    }

    const li = document.createElement("li");

    li.textContent = taskText;

    taskList.appendChild(li);

    console.log("Додано завдання:", taskText);

    taskInput.value = "";

    taskInput.focus();
}

addTaskButton.addEventListener("click", function () {

    createTask();

});

taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        createTask();
    }

});

taskList.addEventListener("click", function (event) {

    if (event.target.nodeName === "LI") {

        console.log("Видалено:", event.target.textContent);

        event.target.remove();
    }

});

taskList.addEventListener("click", function (event) {

    console.log("Фаза захоплення");
    console.log(event.target);

}, true);

taskList.addEventListener("click", function () {

    console.log("Фаза спливання");

}, false);