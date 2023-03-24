let addButton = document.querySelector('#add-button');
let taskList = document.querySelector('#task-list');
let inputNewTask = document.querySelector('#new-task');

let taskListArray = [];
let idTask = 0;


const handleSubmit = () => {
    let newTask = {};
    let newItemList = document.createElement('li');
    
    newTask.id = taskListArray.length + 1;
    newTask.title = inputNewTask.value;
    newTask.complete = false;
    
    taskListArray[taskListArray.length] = newTask;
    newItemList.innerHTML = newTask.title;
    taskList.appendChild(newItemList);
}

const handleCheckTask = () => {
    
}

const handleDelete = () => {
    
}

addButton.onclick = handleSubmit;
