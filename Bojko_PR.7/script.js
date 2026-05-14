"use strict";

console.log("Практична робота №7 підключена");

/*
=========================================
DOM ELEMENTS
=========================================
*/

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

const clearCompletedBtn = document.getElementById("clearCompleted");
const clearAllBtn = document.getElementById("clearAll");

const tasksCount = document.getElementById("tasksCount");
const completedCount = document.getElementById("completedCount");

const runJsonDemoBtn = document.getElementById("runJsonDemo");

const jsonParseOutput = document.getElementById("jsonParseOutput");
const jsonStringifyOutput = document.getElementById("jsonStringifyOutput");

const runArrayMethodsBtn = document.getElementById("runArrayMethods");

const originalArray = document.getElementById("originalArray");
const mapResult = document.getElementById("mapResult");
const filterResult = document.getElementById("filterResult");
const reduceResult = document.getElementById("reduceResult");

const showErrorBtn = document.getElementById("showError");
const errorOutput = document.getElementById("errorOutput");

/*
=========================================
LOCAL STORAGE
=========================================
*/

function loadTasks() {

    try {

        const tasksJSON = localStorage.getItem("tasks");

        return tasksJSON ? JSON.parse(tasksJSON) : [];

    } catch (error) {

        console.error("Помилка завантаження:", error);

        return [];
    }
}

function saveTasks(tasks) {

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/*
=========================================
DISPLAY TASKS
=========================================
*/

function displayTasks() {

    const tasks = loadTasks();

    taskList.innerHTML = "";

    if (tasks.length === 0) {

        taskList.innerHTML = `
            <li class="empty">
                Список завдань порожній
            </li>
        `;
    }

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.className = "task-item";

        li.innerHTML = `
            <div class="task-content">

                <input 
                    type="checkbox"
                    class="complete-checkbox"
                    data-index="${index}"
                    ${task.completed ? "checked" : ""}
                >

                <span class="task-text ${task.completed ? "completed" : ""}">
                    ${task.text}
                </span>

            </div>

            <button 
                class="delete-btn"
                data-index="${index}"
            >
                Видалити
            </button>
        `;

        taskList.appendChild(li);
    });

    updateStatistics();
}

/*
=========================================
STATISTICS
=========================================
*/

function updateStatistics() {

    const tasks = loadTasks();

    const completedTasks = tasks.filter(task => task.completed);

    tasksCount.textContent = `Всього завдань: ${tasks.length}`;

    completedCount.textContent =
        `Виконано: ${completedTasks.length}`;
}

/*
=========================================
ADD TASK
=========================================
*/

function addTask() {

    const text = taskInput.value.trim();

    if (text === "") {

        alert("Введіть текст завдання");

        return;
    }

    const tasks = loadTasks();

    const newTask = {
        text,
        completed: false,
        createdAt: new Date().toLocaleString()
    };

    tasks.push(newTask);

    saveTasks(tasks);

    displayTasks();

    taskInput.value = "";

    console.log("Завдання додано");
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        addTask();
    }
});

/*
=========================================
DELEGATION EVENTS
=========================================
*/

taskList.addEventListener("click", (event) => {

    const index = event.target.dataset.index;

    if (index === undefined) return;

    const tasks = loadTasks();

    // Видалення
    if (event.target.classList.contains("delete-btn")) {

        tasks.splice(index, 1);

        saveTasks(tasks);

        displayTasks();

        console.log("Завдання видалено");
    }
});

taskList.addEventListener("change", (event) => {

    const index = event.target.dataset.index;

    if (index === undefined) return;

    const tasks = loadTasks();

    // Перемикання completed
    if (event.target.classList.contains("complete-checkbox")) {

        tasks[index].completed = event.target.checked;

        saveTasks(tasks);

        displayTasks();
    }
});

/*
=========================================
CLEAR BUTTONS
=========================================
*/

clearCompletedBtn.addEventListener("click", () => {

    let tasks = loadTasks();

    tasks = tasks.filter(task => !task.completed);

    saveTasks(tasks);

    displayTasks();
});

clearAllBtn.addEventListener("click", () => {

    const confirmDelete = confirm(
        "Видалити всі завдання?"
    );

    if (confirmDelete) {

        localStorage.removeItem("tasks");

        displayTasks();
    }
});

/*
=========================================
JSON DEMO
=========================================
*/

runJsonDemoBtn.addEventListener("click", () => {

    const jsonString = `
    {
        "name": "Владислав",
        "age": 19,
        "city": "Київ"
    }
    `;

    try {

        // JSON.parse
        const user = JSON.parse(jsonString);

        jsonParseOutput.textContent =
            JSON.stringify(user, null, 2);

        // JSON.stringify
        const convertedJSON =
            JSON.stringify(user, null, 4);

        jsonStringifyOutput.textContent =
            convertedJSON;

    } catch (error) {

        console.error(error);
    }
});

/*
=========================================
ARRAY METHODS
=========================================
*/

runArrayMethodsBtn.addEventListener("click", () => {

    const numbers = [1, 2, 3, 4, 5];

    originalArray.textContent =
        JSON.stringify(numbers);

    // MAP
    const squares =
        numbers.map(num => num * num);

    mapResult.textContent =
        JSON.stringify(squares);

    // FILTER
    const evenNumbers =
        numbers.filter(num => num % 2 === 0);

    filterResult.textContent =
        JSON.stringify(evenNumbers);

    // REDUCE
    const sum =
        numbers.reduce((acc, num) => acc + num, 0);

    reduceResult.textContent = sum;
});

/*
=========================================
ERROR HANDLING
=========================================
*/

showErrorBtn.addEventListener("click", () => {

    const badJSON = "{ name: Влад }";

    try {

        JSON.parse(badJSON);

    } catch (error) {

        errorOutput.textContent =
            `Помилка JSON: ${error.message}`;

        console.error(error);
    }
});

/*
=========================================
INIT
=========================================
*/

displayTasks();