let count = 0;

let counter = document.getElementById("counter");
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let reset = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", function () {
    count++;
    counter.innerText = `Counter : ${count}`;
});

decreaseBtn.addEventListener("click", function () {
    count--;
    if (count < 0) {
        count++;
        alert("count can not be less than Zero");
    } else {
        counter.innerText = `Counter : ${count}`;
    }
})

reset.addEventListener("click", function () {
    if (count == 0) {
        alert("count is 0, there is no need for reset.");
    } else {
        count = 0;
        counter.innerText = `Counter : ${count}`;
    }
})