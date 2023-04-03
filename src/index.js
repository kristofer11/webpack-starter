import './styles/main.scss';
import Project from './models/Project';
import Task from './models/Task';
import displayProjects, { projects, addProject } from './utils/displayProjects';

//Projects array is created in the 'displayProjects' util function

//Default project that will be loaded when the user first starts using the app. Project is pushed to the projects array.
const defaultProj = new Project('Default');
addProject(defaultProj);

//THIS SECTION CONTAINS TEST PROJECTS AND TASKS...DELETE LATER
const buildHouse = new Project('Build House');
addProject(buildHouse);
const shopping = new Project('Go Shopping')
addProject(shopping);

//Test task
const buildFoundation = new Task('Build Foundation', 'get all the materials and build the thing', new Date('2023-04-01'), 5);
//Add the test task to the test project
buildHouse.addTask(buildFoundation)

//Another test task
const buildSomething = new Task('Build something', 'First get the stuff, then build the thing', new Date('1986-10-02'), 5);
//Add the second test task to the test project
buildHouse.addTask(buildSomething);

//Another test task
const buyMilk = new Task('Buy Milk', 'Go in to the dang store and buy the milk', new Date('23-06-11'), 4);
shopping.addTask(buyMilk);

//DOM CODE GOES HERE
const projectList = document.querySelector('#projectList')

displayProjects();

const project1 = document.createElement('div');
project1.textContent = 'project1';
document.body.appendChild(projectList);