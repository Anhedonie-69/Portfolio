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
    img: "Images/red_case.png",
    link: "https://anhedonie-69.github.io/DrumPad/"
  },
  {
    title: "Projet 2",
    description: "Description courte",
    tech: ["JS", "API"],
    img: "Images/blue_case.png",
    link: "lien internet"
  },
  {
    title: "Projet 3",
    description: "Description courte",
    tech: ["JS", "API"],
    img: "Images/green_case.png",
    link: "lien internet"
  }
];

const container = document.getElementById("projects-container");

projects.forEach(projet => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
        <a href="${projet.link}" target="_blank">
            <h2>${projet.title}</h3>
            <p class="para">${projet.description}</p>
            <img src="${projet.img}">
        </a>
    `;

    container.appendChild(card);
});

