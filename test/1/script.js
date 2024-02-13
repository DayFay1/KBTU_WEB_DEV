function addTodo() {
    var todoInput = document.getElementById("todoInput");
    var task = todoInput.value;
    if (task.trim() !== "") {
        var ul = document.getElementById("todoList");
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.onclick = markAsDone;
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(task));
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = deleteTask;
        li.appendChild(deleteButton);
        ul.appendChild(li);
        todoInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

function markAsDone() {
    var li = this.parentNode;
    if (this.checked) {
        li.style.textDecoration = "line-through";
    } else {
        li.style.textDecoration = "none";
    }
}

function deleteTask() {
    var li = this.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}
