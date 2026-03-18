let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");


input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        button.click();
    }
})

button.addEventListener("click", function () {

    let text = input.value.trim();
    if (text == "") {
        alert("Task is empty");
        return;
    }

    let li = document.createElement("li");
    li.classList.add("list");

    let span = document.createElement("span");
    span.innerText = text;
    span.classList.add("taskText");
    li.appendChild(span);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
    deleteBtn.classList.add("delBtn");
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    if (li.scrollWidth > li.clientWidth) {
        li.title = text;
    }

    list.appendChild(li);
    input.value = "";

});




