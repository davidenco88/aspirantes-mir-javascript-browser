let tasks = [];
let id = 1;

const addButton = document.querySelector('#add-button');
const deleteButton = document.querySelector('#delete-button');
const taskList = document.querySelector('#task-list');

function handleCheckTask (event, task) {
    const input = event.currentTarget.querySelector('input');
    const span = event.currentTarget.querySelector('span');
    const isChecked = input.getAttribute('checked');

    if (isChecked) {
        input.removeAttribute('checked');
        span.classList.remove('is-complete');
        tasks = tasks.map(item => item.id === task.id ? {...item, complete: false} : item);
    } else {
        input.setAttribute('checked', true);
        span.classList.add('is-complete');
        tasks = tasks.map(item => item.id === task.id ? {...item, complete: true} : item);
    }

    console.log(tasks);
}

function renderTask(task) {
    
    const taskCheckbox = document.createElement('input');
    const taskItem = document.createElement('li');

    taskCheckbox.setAttribute('type', 'checkbox');

    const taskLabel = document.createElement('span');
    taskLabel.textContent = task.title

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);
    taskItem.addEventListener('click', (event) => {
        handleCheckTask( event, task);
    })
    
    taskList.appendChild(taskItem);
}


function handleSubmit (event) {
    
    event.preventDefault();

    const textInput = document.querySelector('#new-task');

    const task = {
        id,
        title: textInput.value,
        complete: false
    }

    tasks.push(task);
    id++;
    textInput.value = '';

    renderTask(task);
}



function handleDelete (event) {
    event.preventDefault();
    const list = taskList.querySelectorAll('li');
    list.forEach(element => {
        const isChecked = element.children[0].getAttribute('checked');

        isChecked ? element.remove() : null;
    })
}

//addButton.onclick = handleSubmit;

addButton.addEventListener('click', (event) => {
    handleSubmit(event);
})

deleteButton.addEventListener('click', (event) => {
    handleDelete(event);
})
