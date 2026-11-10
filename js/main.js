document.getElementById("year").textContent = new Date().getFullYear();

// Skills
const skillsGroupsEl = document.getElementById("skills-groups");

function renderSkills(groups) {
  skillsGroupsEl.innerHTML = groups
    .map((g) => {
      const pills = g.items.map((item) => `<span class="skill-pill">${item}</span>`).join("");
      return `
        <div class="skill-group">
          <h3>${g.category}</h3>
          <div class="skill-pills">${pills}</div>
        </div>
      `;
    })
    .join("");
}

renderSkills(skillGroups);

// Projects
const projectsGrid = document.getElementById("projects-grid");

function renderProjects(list) {
  projectsGrid.innerHTML = list
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

// Hobbies
const hobbiesGrid = document.getElementById("hobbies-grid");

function renderHobbies(list) {
  hobbiesGrid.innerHTML = list
    .map(
      (h) => `
        <div class="hobby-card">
          <div class="hobby-card-body">
            <div class="hobby-icon">${h.icon || "⭐"}</div>
            <h3>${h.name}</h3>
            <p>${h.description}</p>
          </div>
        </div>
      `
    )
    .join("");
}

renderHobbies(hobbies);
