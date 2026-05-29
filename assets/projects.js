/*
{
    title: "",
    description: "",
    tech: [],
    img: "Images/...",
    link: ""
  }
*/

const projects = [
  {
    title: "Drum-Pad",
    description: "Boite à rhytme sommaire",
    tech: ["HTML", "CSS", "JS"],
    img: "assets/Images/red_case.png",
    link: "https://anhedonie-69.github.io/DrumPad/"
  },
  {
    title: "Alpine",
    description: "Configurateur de véhicule automobile",
    tech: ["HTML", "CSS", "React", "Tailwind"],
    img: "assets/Images/blue_case.png",
    link: "lien internet"
  },
  {
    title: "Cagnotte",
    description: "Cagnotte en ligne",
    tech: ["HTML", "CSS", "PHP", "Symfony", "MySQL"],
    img: "assets/Images/green_case.png",
    link: "https://bruno-payetonpote.dwwm.garage404.com/"
  },
  {
    title: "Météo",
    description: "API météo",
    tech: ["HTML", "CSS", "React"],
    img: "assets/Images/purple_case.png",
    link: "..."
  }
];

const container = document.getElementById("projects-container");

projects.forEach(projet => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
        <a href="${projet.link}" target="_blank">
            <h2>${projet.title}</h2>
            <p class="para">${projet.description}</p>
            <img src="${projet.img}">
        </a>
    `;

    container.appendChild(card);
});

