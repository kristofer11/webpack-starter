import createProjectElement from "../components/projectElement";


export const projects = [];
export const projectList = document.querySelector('#projectList')

export function addProject(project) {
    projects.push(project);
    console.log(projects)
}

function displayProjects() {
    while (projectList.firstChild) {
        projectList.removeChild(projectList.firstChild);
    }

    projects.map((project) => {
        const projectElement = createProjectElement(project);
        projectList.appendChild(projectElement);

        projectElement.addEventListener('click', (event) => {
            const clickedProject = event.target.closest('li')
            if (!clickedProject) return;

            const activeProject = projectList.querySelector('.activeProject');
            if (activeProject) {
                activeProject.classList.remove('activeProject');
            }

            projectElement.classList.add('activeProject')
        })
    })
}

export default displayProjects;