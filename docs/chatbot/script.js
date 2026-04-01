const chatBox = document.querySelector("#chatBox");
const userInput = document.querySelector("#userInput");
const sendBtn = document.querySelector("#sendBtn");

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});

sendBtn.addEventListener("click", sendMsg)

function sendMsg() {
    let input = userInput.value.trim();
    if (input === "") {
        return
    }

    let userMsg = document.createElement("div");
    userMsg.classList.add("message-user");
    userMsg.innerText = input;
    chatBox.appendChild(userMsg);

    let botMsg = document.createElement("div");
    botMsg.classList.add("message-bot")
    botMsg.innerText = "Thinking...";
    chatBox.appendChild(botMsg);

    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
};