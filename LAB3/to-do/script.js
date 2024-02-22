const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const task = taskInput.value;
    if (task) {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        const text = document.createTextNode(task);
        const icon = document.createElement('i');
        icon.setAttribute('class', 'fas fa-trash-alt');
        listItem.appendChild(checkbox);
        listItem.appendChild(text);
        listItem.appendChild(icon);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});

taskList.addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'I') {
        const listItem = target.parentElement;
        taskList.removeChild(listItem);
    }
});


function printNumbers() {
    let number = 1;

    function printNextNumber() {
        if (number <= 10) {
            console.log(number);
            number++;
        } else {
            clearInterval(intervalId);
        }
    }

    const intervalId = setInterval(printNextNumber, 1000);
}

const startButton = document.getElementById('numbers');

startButton.addEventListener('click', printNumbers);
console.log(number);




