let searchBar = document.getElementById("searchBar");
let itemInput = document.getElementById("itemInput");
let addBtn = document.getElementById("addBtn");
let itemsList = document.getElementById("itemsList");

let items = JSON.parse(localStorage.getItem("items")) || [];
console.log(typeof items);

itemInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addBtn.click();
    }
});

renderItems();

addBtn.addEventListener("click", function(){
    let itemVal = itemInput.value.trim();

    if(itemVal === "") return;

    items.push(itemVal);
    localStorage.setItem("items", JSON.stringify(items));

    renderItems();
    itemInput.value = "";
});

function renderItems(){
    console.log("renderItems");
    itemsList.innerHTML = "";

    items.forEach(function(item, index) {
        let li = document.createElement("li");
        li.classList.add("item"+index);
        li.style.listStyle = "none";
        li.innerText = item;
        itemsList.appendChild(li);
    });
};