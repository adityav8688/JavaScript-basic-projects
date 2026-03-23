let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let reversedTasks = [...tasks].reverse();

/*for (let task in reversedTasks) {
    console.log(reversedTasks[task]);
}*/

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        button.click();
    }
});

function renderTasks() {
    list.innerHTML = "";
    reversedTasks.forEach(function (task, index) {

        let li = document.createElement("li");
        li.classList.add("list");

        let span = document.createElement("span");
        span.innerText = reversedTasks[index];
        span.classList.add("taskText");

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
        deleteBtn.classList.add("delBtn");

        deleteBtn.addEventListener("click", function () {
            deleteTask(index);
        });

        let editBtn = document.createElement("button");
        editBtn.innerHTML = `<span class="material-symbols-outlined">edit</span>`
        editBtn.classList.add("editBtn");

        editBtn.addEventListener("click", function () {
            if (editBtn.innerText === "edit") {
                let inputField = document.createElement("input");

                inputField.type = "text";
                inputField.value = span.innerText;
                inputField.id = "input-value-"+index; 
                inputField.classList.add("editText");

                li.replaceChild(inputField, span);

                editBtn.innerHTML = `<span class="material-symbols-outlined">save</span>`;

            } else {
                let inputField = li.querySelector("input");
                span.innerText = inputField.value;
                let taskIndex = tasks.length - 1 - index;
                tasks[taskIndex] = inputField.value;
                localStorage.setItem("tasks", JSON.stringify(tasks));

                li.replaceChild(span, inputField);

                editBtn.innerHTML = `<span class="material-symbols-outlined">edit</span>`;
            }
        });
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
};
renderTasks();

button.addEventListener("click", function () {

    let text = input.value.trim();

    if (text === "") return;

    tasks.push(text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    reversedTasks = [...tasks].reverse();

    renderTasks();
    input.value = "";

});

function deleteTask(index) {
    let taskIndex = reversedTasks.length - 1 - index;

    tasks.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    reversedTasks = [...tasks].reverse();

    renderTasks();
}







