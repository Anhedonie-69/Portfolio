document.querySelectorAll(".folder").forEach(folder => {
  folder.addEventListener("click", () => {
    const target = folder.dataset.target;

    document.querySelectorAll(".window").forEach(win => {
      win.classList.remove("active");
    });
    if(target == "projects"){
        window.location.href = "projects.html";
    } else {
        document.getElementById(target).classList.add("active");
        document.body.classList.add("no-scroll");
    }
  });
});

document.querySelectorAll(".window").forEach(win => {
    win.addEventListener("click", () => {
        win.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
});