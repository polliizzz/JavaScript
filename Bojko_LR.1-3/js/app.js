"use strict";

const createBtn = document.getElementById("createBtn");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");

const preview = document.getElementById("resumePreview");

createBtn.addEventListener("click", () => {

    const data = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        age: document.getElementById("age").value,
        summary: document.getElementById("summary").value,
        university: document.getElementById("university").value,
        speciality: document.getElementById("speciality").value,
        company: document.getElementById("company").value,
        position: document.getElementById("position").value,
        skills: document.getElementById("skills").value
    };

    if (!validateInputs(data)) {
        return;
    }

    const person = new Person(
        data.fullName,
        data.email,
        data.phone,
        data.age,
        data.summary
    );

    const education = new Education(
        data.university,
        data.speciality
    );

    const experience = new Experience(
        data.company,
        data.position
    );

    const skills = new Skills(data.skills);

    const resume = new Resume(
        person,
        education,
        experience,
        skills
    );

    preview.innerHTML = resume.render();
});

saveBtn.addEventListener("click", () => {

    localStorage.setItem("resumeData", JSON.stringify({
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        age: document.getElementById("age").value,
        summary: document.getElementById("summary").value,
        university: document.getElementById("university").value,
        speciality: document.getElementById("speciality").value,
        company: document.getElementById("company").value,
        position: document.getElementById("position").value,
        skills: document.getElementById("skills").value
    }));

    alert("Резюме збережено");
});

window.addEventListener("load", () => {

    const saved = JSON.parse(localStorage.getItem("resumeData"));

    if (!saved) return;

    document.getElementById("fullName").value = saved.fullName;
    document.getElementById("email").value = saved.email;
    document.getElementById("phone").value = saved.phone;
    document.getElementById("age").value = saved.age;
    document.getElementById("summary").value = saved.summary;
    document.getElementById("university").value = saved.university;
    document.getElementById("speciality").value = saved.speciality;
    document.getElementById("company").value = saved.company;
    document.getElementById("position").value = saved.position;
    document.getElementById("skills").value = saved.skills;
});

clearBtn.addEventListener("click", () => {

    localStorage.removeItem("resumeData");

    location.reload();
});