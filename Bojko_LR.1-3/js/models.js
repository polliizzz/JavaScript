"use strict";

class Person {
    constructor(name, email, phone, age, summary) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.age = Number(age);
        this.summary = summary;
    }
}

class Education {
    constructor(university, speciality) {
        this.university = university;
        this.speciality = speciality;
    }
}

class Experience {
    constructor(company, position) {
        this.company = company;
        this.position = position;
    }
}

class Skills {
    constructor(skills) {
        this.skills = skills.split(",").map(skill => skill.trim());
    }
}

class Resume {
    constructor(person, education, experience, skills) {
        this.person = person;
        this.education = education;
        this.experience = experience;
        this.skills = skills;
    }

    render() {
        return `
            <div class="resume-card">

                <div class="resume-header">
                    <h2>${this.person.name}</h2>

                    <p>${this.person.email}</p>
                    <p>${this.person.phone}</p>
                    <p>${this.person.age} років</p>
                </div>

                <div class="resume-section">
                    <h3>Про себе</h3>
                    <p>${this.person.summary}</p>
                </div>

                <div class="resume-section">
                    <h3>Освіта</h3>

                    <p><b>${this.education.university}</b></p>
                    <p>${this.education.speciality}</p>
                </div>

                <div class="resume-section">
                    <h3>Досвід роботи</h3>

                    <p><b>${this.experience.company}</b></p>
                    <p>${this.experience.position}</p>
                </div>

                <div class="resume-section">
                    <h3>Навички</h3>

                    ${
                        this.skills.skills
                            .map(skill => `<span class="skill">${skill}</span>`)
                            .join("")
                    }
                </div>

            </div>
        `;
    }
}