"use strict";

// USERS
const btnUsers = document.getElementById("btnUsers");
const usersBox = document.getElementById("usersBox");

// POKEMON
const btnPokemon = document.getElementById("btnPokemon");
const pokemonArea = document.getElementById("pokemonArea");

// ERROR
const errorBox = document.getElementById("error");

// ---------------- USERS ----------------
btnUsers.addEventListener("click", async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) throw new Error("Помилка завантаження users");

    const data = await res.json();
    usersBox.textContent = JSON.stringify(data, null, 2);

  } catch (err) {
    showError(err.message);
  }
});

// ---------------- POKEMON ----------------
btnPokemon.addEventListener("click", async () => {
  const name = prompt("Введи ім'я або ID покемона:");

  if (!name) return;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);

    if (!res.ok) throw new Error("Покемон не знайдений 😢");

    const data = await res.json();
    renderPokemon(data);

  } catch (err) {
    showError(err.message);
  }
});

// ---------------- RENDER ----------------
function renderPokemon(p) {
  pokemonArea.innerHTML = `
    <div class="card">
      <h3>${p.name}</h3>
      <img src="${p.sprites.front_default}" />
      
      <div class="badges">
        ${p.types.map(t => `<span class="badge">${t.type.name}</span>`).join("")}
      </div>

      <p>⚡ XP: ${p.base_experience}</p>
      <p>💖 HP: ${p.stats[0].base_stat}</p>
    </div>
  `;
}

// ---------------- ERROR ----------------
function showError(msg) {
  errorBox.textContent = msg;
  errorBox.classList.remove("hidden");

  setTimeout(() => {
    errorBox.classList.add("hidden");
  }, 3000);
}