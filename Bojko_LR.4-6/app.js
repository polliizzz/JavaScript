"use strict";

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const genre = document.getElementById("genre");
const sort = document.getElementById("sort");
const error = document.getElementById("error");

let state = {
    all: [],
    filtered: []
};

async function loadData() {
    try {
        const res = await fetch("https://api.tvmaze.com/shows");
        if (!res.ok) throw new Error("API error");

        state.all = await res.json();
        state.filtered = state.all;

        fillGenres();
        render();

    } catch (e) {
        error.textContent = "Не вдалося завантажити дані 💔";
    }
}

function fillGenres() {
    const set = new Set();

    state.all.forEach(m =>
        m.genres.forEach(g => set.add(g))
    );

    set.forEach(g => {
        const option = document.createElement("option");
        option.value = g;
        option.textContent = g;
        genre.appendChild(option);
    });
}

function render() {
    grid.innerHTML = "";

    state.filtered.forEach(({ name, image, rating, genres }) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${image?.medium || ''}">
            <div style="padding:10px">
                <h3>${name}</h3>
                <p class="badge">⭐ ${rating.average || "N/A"}</p>
                <p>${genres.join(", ")}</p>
            </div>
        `;

        grid.appendChild(card);
    });
}

function applyFilters() {
    let data = [...state.all];

    const q = search.value.toLowerCase();
    const g = genre.value;

    data = data.filter(m =>
        m.name.toLowerCase().includes(q)
    );

    if (g !== "all") {
        data = data.filter(m => m.genres.includes(g));
    }

    if (sort.value === "rating") {
        data.sort((a, b) => (b.rating.average || 0) - (a.rating.average || 0));
    }

    if (sort.value === "name") {
        data.sort((a, b) => a.name.localeCompare(b.name));
    }

    state.filtered = data;
    render();
}

search.addEventListener("input", applyFilters);
genre.addEventListener("change", applyFilters);
sort.addEventListener("change", applyFilters);

loadData();