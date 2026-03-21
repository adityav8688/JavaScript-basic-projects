let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


for (let task in tasks) {
    console.log(tasks[task]);
}

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        button.click();
    }
});

function renderTasks() {
    list.innerHTML="";
    let task = tasks.length-1;
    for (let i in tasks) {

        let li = document.createElement("li");
        li.classList.add("list");

        let span = document.createElement("span");
        span.innerText = tasks[task];
        span.classList.add("taskText");

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
        deleteBtn.classList.add("delBtn");

        deleteBtn.addEventListener("click", function () {
            deleteTask(task);
        });

        let editBtn = document.createElement("button");
        editBtn.innerHTML = `<span class="material-symbols-outlined">edit</span>`
        editBtn.classList.add("editBtn");

        editBtn.addEventListener("click", function () {
            if (editBtn.innerText === "edit") {
                let inputField = document.createElement("input");
                inputField.type = "text";
                inputField.value = span.innerText;
                inputField.classList.add("editText");

                li.replaceChild(inputField, span);

                editBtn.innerHTML = `<span class="material-symbols-outlined">save</span>`;

            } else {
                let inputField = li.querySelector("input");
                span.innerText = inputField.value;

                li.replaceChild(span, inputField);

                editBtn.innerHTML = `<span class="material-symbols-outlined">edit</span>`;
            }
        });
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);
        task--;
    };
};
renderTasks();

button.addEventListener("click", function () {

    let text = input.value.trim();

    if (text === "") return;

    tasks.push(text);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();

    input.value = "";

});

function deleteTask(task){
    tasks.splice(task, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();
}







