// populates the projects-container with entries in projects.json

// get projects from projects.json
fetch('./projects.json')
    .then(response => response.json())
    .then(projects => {
        const container = document.getElementById('projects-container');
        container.innerHTML = '';

        projects.forEach(project => {
            // main project card element
            const projectLink = document.createElement('a');
            projectLink.href = project.link;
            projectLink.target = "_blank";
            projectLink.className = "project-card";
            
            // project tags
            const tagList = project.tags
                .map(tag => `<span class="small-tag">${tag}</span>`)
                .join(' ');

            projectLink.innerHTML = `
                <div class="project-cover">
                    <img src="${project.coverImage}" alt="${project.name}">
                </div>
                <div class="project-details">
                    <h2>${project.name}</h2>
                    <p class="emphasis" style="margin: 0;">${project.year}</p>
                    <p style="line-height: 24px; margin: 5px 0 0 0;">${tagList}</p>
                </div>
            `;

            container.appendChild(projectLink)
        });
    })
    .catch(error => {
        console.error('Error loading projects:', error);
        document.getElementById('projects-container').innerHTML = '<p style="color: #ff6565;">Failed to load project entries.</p>';
    });