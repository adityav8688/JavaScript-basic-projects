let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

button.addEventListener("click", function () {

    let text = input.value;
    if (text == "") { alert("Task is empty") }
    else {
        let li = document.createElement("li");
        li.innerText = text;
        li.classList.add("list")

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        li.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        list.appendChild(li);
        input.value = "";
    }
});




