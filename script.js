// 🔮 Transisi Halus Antar Halaman
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    if (!link.getAttribute("href").includes("#")) {
      e.preventDefault();
      document.body.style.opacity = "0";
      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    }
  });
});

// ✨ Mode Aura (index.html)
const auraToggle = document.getElementById("aura-toggle");
if (auraToggle) {
  auraToggle.addEventListener("click", () => {
    document.body.classList.toggle("aura-mode");
    auraToggle.textContent = 
      document.body.classList.contains("aura-mode")
        ? "Nonaktifkan Aura ✨"
        : "Aktifkan Aura 🔮";
  });
}

// 🌑 Mode Malam Reader (reader.html)
const nightToggle = document.getElementById("night-mode-toggle");
if (nightToggle) {
  nightToggle.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");
  });
}

// 🔍 Sistem Pencarian Judul Novel (index.html)
const searchInput = document.getElementById("search-input");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    document.querySelectorAll(".novel-card").forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = title.includes(keyword) ? "block" : "none";
    });
  });
}

// 🗂️ Filter Genre Suci (index.html)
function filterGenre(genre) {
  const cards = document.querySelectorAll(".novel-card");
  cards.forEach(card => {
    const genres = card.dataset.genre.toLowerCase();
    card.style.display =
      genre === "all" || genres.includes(genre.toLowerCase())
        ? "block"
        : "none";
  });
}

// 🧙‍♂️ Greeting Chuunibyou Otomatis (detail.html)
const greeting = document.getElementById("greeting");
const pageTitle = document.querySelector("h1");
if (greeting && pageTitle) {
  const judul = pageTitle.textContent.trim();
  greeting.innerText = `Selamat datang, O Pengelana. Maukah kau membawa pulang naskah suci "${judul}"?`;
}

// Debug log (opsional)
console.log("✨ Toko Hikari Bunko siaga dalam dimensi kode.");
