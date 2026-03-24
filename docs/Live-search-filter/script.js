let searchBar = document.getElementById("searchBar");
let itemInput = document.getElementById("itemInput");
let addBtn = document.getElementById("addBtn");
let itemsList = document.getElementById("itemsList");
let itemNames = document.querySelectorAll("li");

let items = JSON.parse(localStorage.getItem("items")) || [];



itemInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

renderItems();

addBtn.addEventListener("click", function () {
    let itemVal = itemInput.value.trim();

    if (itemVal === "") return;

    items.push(itemVal);
    localStorage.setItem("items", JSON.stringify(items));

    renderItems();
    itemInput.value = "";
});

searchBar.addEventListener("keyup", function () {
    renderItems(searchBar.value);
});

function renderItems(filter = "") {
    itemsList.innerHTML = "";

    items.filter(item =>
        item.toLowerCase().split(" ")
            .some(word => word.startsWith(filter.toLowerCase()))
    )
        .forEach((item, index) => {
            let li = document.createElement("li");
            li.classList.add("item" + index);

            let span = document.createElement("span");
            span.innerText = item;
            span.classList.add("itemInfo");
            

            let delBtn = document.createElement("button");
            delBtn.classList.add("delBtn");
            delBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`

            delBtn.addEventListener("click", function () {
                deleteItem(index);
            });

            li.appendChild(span);
            li.appendChild(delBtn);
            itemsList.appendChild(li);
        });
};

function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));

    renderItems();
};