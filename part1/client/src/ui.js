import { PostMessage, GetMessage } from "./service.js";
async function displayMessages() {
  const myMessages = await GetMessage();
  const container = document.getElementById("MessageContainer");
  container.replaceChildren();
  myMessages.forEach((message) => {
    const messageWrapper = document.createElement("div");
    const dateTime = document.createElement("time");
    const messageText = document.createElement("p");
    dateTime.textContent = message.posted;
    messageText.textContent = message.text;
    messageWrapper.append(dateTime, messageText);
    container.append(messageWrapper);
  });
}
function GetUserInput() {
  const formName = document.getElementById("messageForm");
  formName.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userInput = document.getElementById("message");
    await PostMessage(userInput.value);
    userInput.value = "";
    displayMessages();
  });
}
GetUserInput();
