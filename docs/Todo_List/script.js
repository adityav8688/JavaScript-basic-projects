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

    let editBtn = document.createElement("button");
    editBtn.innerHTML = `<span class="material-symbols-outlined">edit</span>`
    editBtn.classList.add("editBtn");
    li.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
    deleteBtn.classList.add("delBtn");
    li.appendChild(deleteBtn);

    editBtn.addEventListener("click", function(){
        if(editBtn.innerText === "edit"){
            let inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = span.innerText;
            inputField.classList.add("editText");

            li.replaceChild(inputField, span);

            editBtn.innerHTML = `<span class="material-symbols-outlined">save</span>`
        }else{
            let inputField = li.querySelector("input");
            span.innerText = inputField.value;

            li.replaceChild(span, inputField);

            editBtn.innerHTML = `<span class="material-symbols-outlined">edit</span>`
        }
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    if (li.scrollWidth > li.clientWidth) {
        li.title = text;
    }

    list.appendChild(li);
    input.value = "";

});




