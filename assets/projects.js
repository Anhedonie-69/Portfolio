/*
{
    title: "",
    description: "",
    tech: [],
    link: ""
  }
*/

const projects = [
    {
        title: "Drum-Pad",
        description: "Boîte à rythme réalisée en JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://anhedonie-69.github.io/DrumPad/"
    },
    {
        title: "Alpine",
        description: "Configurateur de véhicule automobile.",
        tech: ["HTML", "CSS", "React", "Tailwind"],
        link: "https://tp-alpine-dusky.vercel.app"
    },
    {
        title: "Cagnotte",
        description: "Application de cagnotte en ligne.",
        tech: ["PHP", "Symfony", "MySQL"],
        link: "https://bruno-payetonpote.dwwm.garage404.com/"
    },
    {
        title: "Météo",
        description: "Application utilisant une API météo.",
        tech: ["React", "API"],
        link: "https://meteo-api-one.vercel.app/"
    }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {

    const techBadges = project.tech
        .map(tech =>
            `<span class="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                ${tech}
            </span>`
        )
        .join("");

    const card = document.createElement("article");

    card.className = `
        bg-slate-900
        rounded-2xl
        p-6
        shadow-lg
        hover:-translate-y-2
        hover:shadow-cyan-500/20
        transition
        duration-300
        flex
        flex-col
    `;

    card.innerHTML = `
        <h3 class="text-2xl font-bold mb-3">
            ${project.title}
        </h3>

        <p class="text-slate-400 mb-6 flex-grow">
            ${project.description}
        </p>

        <div class="flex flex-wrap gap-2 mb-6">
            ${techBadges}
        </div>

        <a
            href="${project.link}"
            target="_blank"
            class="bg-cyan-500 hover:bg-cyan-600 text-center py-3 rounded-xl font-semibold transition">

            Voir le projet

        </a>
    `;

    container.appendChild(card);
});