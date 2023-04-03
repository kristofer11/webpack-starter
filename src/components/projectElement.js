function createProjectElement(project) {
    const projectElement = document.createElement('li');
    const projectTitle = document.createElement('h3');
    const newTaskbutton = document.createElement('button')
  
    projectTitle.textContent = project.title;
    newTaskbutton.textContent = '+ Task'
  
    projectElement.appendChild(projectTitle);
    projectElement.appendChild(newTaskbutton)
  
    projectElement.classList.add('projectElement')

    return projectElement;
  }
  
  export default createProjectElement;
  