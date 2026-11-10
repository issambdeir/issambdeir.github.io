document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle, persisted per-visitor via localStorage.
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

try {
  const saved = localStorage.getItem("theme");
  if (saved) applyTheme(saved);
} catch (e) {
  // localStorage unavailable (private browsing, etc.) — fall back to system theme.
}

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {
    // ignore
  }
});

// Render project cards from js/projects-data.js
const grid = document.getElementById("projects-grid");

function renderProjects(list) {
  grid.innerHTML = list
    .map((p) => {
      const imageHtml = p.image
        ? `<img src="${p.image}" alt="${p.name} screenshot" />`
        : `<img src="https://placehold.co/400x240?text=${encodeURIComponent(p.name)}" alt="${p.name} placeholder" />`;

      const tagsHtml = (p.tags || [])
        .map((t) => `<span class="project-tag">${t}</span>`)
        .join("");

      const links = [];
      if (p.liveUrl) links.push(`<a href="${p.liveUrl}" target="_blank" rel="noopener">Live Demo</a>`);
      if (p.codeUrl) links.push(`<a href="${p.codeUrl}" target="_blank" rel="noopener">Code</a>`);

      return `
        <div class="project-card">
          ${imageHtml}
          <div class="project-card-body">
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <div class="project-tags">${tagsHtml}</div>
            ${links.length ? `<div class="project-links">${links.join("")}</div>` : ""}
          </div>
        </div>
      `;
    })
    .join("");
}

renderProjects(projects);
