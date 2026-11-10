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

function placeholderImage(name) {
  return `https://placehold.co/400x240?text=${encodeURIComponent(name)}`;
}

function renderProjects(list) {
  projectsGrid.innerHTML = list
    .map((p, i) => {
      const imageHtml = `<img src="${p.image || placeholderImage(p.name)}" alt="${p.name} screenshot" />`;

      const tagsHtml = (p.tags || [])
        .map((t) => `<span class="project-tag">${t}</span>`)
        .join("");

      const links = [];
      if (p.liveUrl) links.push(`<a href="${p.liveUrl}" target="_blank" rel="noopener">Live Demo</a>`);
      if (p.codeUrl) links.push(`<a href="${p.codeUrl}" target="_blank" rel="noopener">Code</a>`);

      return `
        <div class="project-card" data-index="${i}">
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

// Project modal: click a card (but not a link inside it) to see more detail
const modal = document.getElementById("project-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTags = document.getElementById("modal-tags");
const modalLinks = document.getElementById("modal-links");
const modalClose = document.getElementById("modal-close");

function openModal(project) {
  modalImage.src = project.image || placeholderImage(project.name);
  modalImage.alt = `${project.name} screenshot`;
  modalTitle.textContent = project.name;
  modalDescription.textContent = project.description;
  modalTags.innerHTML = (project.tags || [])
    .map((t) => `<span class="project-tag">${t}</span>`)
    .join("");

  const links = [];
  if (project.liveUrl) links.push(`<a href="${project.liveUrl}" target="_blank" rel="noopener">Live Demo</a>`);
  if (project.codeUrl) links.push(`<a href="${project.codeUrl}" target="_blank" rel="noopener">Code</a>`);
  modalLinks.innerHTML = links.join("");

  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

projectsGrid.addEventListener("click", (e) => {
  if (e.target.closest("a")) return; // let project links behave normally
  const card = e.target.closest(".project-card");
  if (!card) return;
  const project = projects[Number(card.dataset.index)];
  if (project) openModal(project);
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});

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
