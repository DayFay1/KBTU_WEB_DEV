// Get the DOM elements that we need
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add an event listener to the form element to handle the submission
taskForm.addEventListener('submit', function(event) {
    // Prevent the default behavior of the form
    event.preventDefault();
    // Get the value of the input element
    const task = taskInput.value;
    // Check if the input is not empty
    if (task) {
        // Create a new list item element
        const listItem = document.createElement('li');
        // Create a new checkbox element
        const checkbox = document.createElement('input');
        // Set the type attribute of the checkbox to "checkbox"
        checkbox.setAttribute('type', 'checkbox');
        // Create a new text node with the task value
        const text = document.createTextNode(task);
        // Create a new icon element
        const icon = document.createElement('i');
        // Set the class attribute of the icon to "fas fa-trash-alt"
        icon.setAttribute('class', 'fas fa-trash-alt');
        // Append the checkbox, text, and icon to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(text);
        listItem.appendChild(icon);
        // Append the list item to the list element
        taskList.appendChild(listItem);
        // Clear the input value
        taskInput.value = '';
    }
});

// Add an event listener to the list element to handle the clicks
taskList.addEventListener('click', function(event) {
    // Get the target element of the click event
    const target = event.target;
    // Check if the target is an icon element
    if (target.tagName === 'I') {
        // Get the parent element of the target, which is the list item
        const listItem = target.parentElement;
        // Remove the list item from the list element
        taskList.removeChild(listItem);
    }
});
