// Pokazanie sociali
const pokaSocialki = (wlacznikKarta, socialkiKarta) => {
  const wlacz = document.getElementById(wlacznikKarta),
    socialki = document.getElementById(socialkiKarta);

  wlacz.addEventListener("click", () => {
    // Kiedy na odwrót to dodamy animacje na dół
    if (socialki.classList.contains("animation")) {
      socialki.classList.add("dol-animacja");
    }

    // Usuwamy dol-animacje
    setTimeout(() => {
      socialki.classList.remove("dol-animacja");
    }, 1000);

    // Animacja do socialek
    socialki.classList.toggle("animation");
  });
};

pokaSocialki("karta-wlacznik", "karta-linki");


