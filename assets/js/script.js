function renderSkills() {
  const container = document.getElementById("skillsContainer");
  if (!container) return;

  container.innerHTML = portfolioData.skills.map((category) => `
    <article class="skill-category">
      <h3><i class="${category.icon}"></i> ${category.category}</h3>
      <div class="skill-list">
        ${category.items.map((item) => `
          <div class="skill-card">
            <i class="${item.icon}"></i>
            <h4>${item.name}</h4>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderProjects() {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  container.innerHTML = portfolioData.projects.map((project) => `
    <article class="project-card reveal">
      <div class="project-image ${project.imageClass}">
        <div class="project-image-content">
          <i class="${project.imageIcon}"></i>
          <span>${project.imageLabel}</span>
        </div>
        <span class="project-number">${project.number}</span>
      </div>

      <div class="project-info">
        <span class="project-category">${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <div class="project-tags">
          ${project.tags.map((tag) => `
            <span><i class="${tag.icon}"></i> ${tag.name}</span>
          `).join("")}
        </div>

        <div class="project-footer">
          <span>${project.footer}</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </div>
    </article>
  `).join("");
}

function renderEducation() {
  const container = document.getElementById("educationContainer");
  if (!container) return;

  container.innerHTML = portfolioData.education.map((item) => `
    <div class="timeline-item">
      <span class="timeline-date">${item.date}</span>
      <div class="timeline-content">
        <i class="${item.icon}"></i>
        <h3>${item.title}</h3>
        <p>${item.institution}</p>
        ${item.detail ? `<span>${item.detail}</span>` : ""}
      </div>
    </div>
  `).join("");
}

renderSkills();
renderProjects();
renderEducation();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const typing = document.getElementById("typing");
const cursorGlow = document.querySelector(".cursor-glow");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const icon = menuToggle.querySelector("i");

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuToggle.querySelector("i").classList.replace("fa-xmark", "fa-bars");
  });
});

const words = ["Full-Stack", "Web", "Logiciel"];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  typing.textContent = currentWord.substring(0, charIndex);

  if (!deleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 120);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 65);
  } else {
    deleting = !deleting;

    if (!deleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, 900);
  }
}

typeEffect();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  },
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

document.addEventListener("mousemove", (event) => {
  if (window.matchMedia("(pointer: fine)").matches) {
    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";
  }
});

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 180) {
      current = section.id;
    }
  });

  navItems.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current,
    );
  });
});
