function filter(category) {
    const projects = document.getElementsByClassName("projects-card")
    for (let l = 0; l < projects.length; l++) {
        const project = projects[l];
        if (category == "all") {
            project.classList.add("hidden");
            setTimeout(() => {
                project.classList.remove("hidden")
            }, 1);
        } else {
            if (project.classList.contains(category)) {
                project.classList.add("hidden");
                setTimeout(() => {
                    project.classList.remove("hidden")
                }, 1);
            } else {
                project.classList.add("hidden")
            }
        }
    }
}