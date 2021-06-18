const home = document.getElementById("home-a");
const homeSection = document.getElementById("homeSection");
const skills = document.getElementById("skills-a");
const workSection = document.getElementById("workSkills");
const projects = document.getElementById("projects-a");
const projectsSection = document.getElementById("projectSection");
const contact = document.getElementById("contact-a");
const contactSection = document.getElementById("contactSection");

function scrollMenu() {
  if (home) {
    homeSection.scrollIntoView();
  }
  if (skills) {
    workSection.scrollIntoView();
  }
  if (projects) {
    projectsSection.scrollIntoView();
  }
  if (contact) {
    contactSection.scrollIntoView();
  }
}
