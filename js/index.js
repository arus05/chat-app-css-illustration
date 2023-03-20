const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const chatBottom = document.getElementById("chat-bottom")

sendBtn.addEventListener("click", ()=>{
  const message = messageInput.value;
  if (message !== ""){
    const newChatBox = document.createElement("div");
    newChatBox.classList.add("my-chatbox");
    newChatBox.innerText = message;
    chatBottom.append(newChatBox);
    messageInput.value = "";
    scrollToBottom(chatBottom);
  }
})

messageInput.addEventListener("keypress", (event)=>{
  if(event.key === "Enter"){
    sendBtn.click();
  }
})

function scrollToBottom(el){
  el.scrollTop = el.scrollHeight;
}