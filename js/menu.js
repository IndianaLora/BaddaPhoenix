const home = document.getElementById("home-a");
const homeSection = document.getElementById("homeSection");
const skills = document.getElementById("skills-a");
const workSection = document.getElementById("workSkills");
const projects = document.getElementById("projects-a");
const projectsSection = document.getElementById("projectSection");
const contact = document.getElementById("contact-a");
const contactSection = document.getElementById("contactSection");

home.addEventListener("click", () => {
  homeSection.scrollIntoView({ behavior: "smooth" });
});
skills.addEventListener("click", () => {
  workSection.scrollIntoView({ behavior: "smooth" });
});
projects.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});
contact.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});
