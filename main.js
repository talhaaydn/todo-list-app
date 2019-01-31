// get all elements
let addTodoForm = document.getElementById("addTodoForm");
let addTodoInput = document.getElementById("addTodoInput");

let showTodo = document.querySelector(".show-todo");
let ulElement = document.getElementById("list");

// Submit listener
addTodoForm.addEventListener("submit", function(e){
    let todoValue = addTodoInput.value;

    createListItem(todoValue);

    e.preventDefault();
});

// create list item
function createListItem(todoValue){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(todoValue));

    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.id = "deleteButton";
    deleteButton.innerHTML = "Delete";

    li.appendChild(deleteButton);

    ulElement.appendChild(li);

    addTodoInput.value = "";
}

// if click deleteButton, remove list item
showTodo.addEventListener("click", function(e){
    if(e.target.id === "deleteButton"){
        e.target.parentElement.remove();
    }
})