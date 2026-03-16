// Simulated chat data (later from database)
const chatData = {
  id: 1,
  name: "Study Group – CS101",
  members: 5
};

function loadChat(){
  document.getElementById("chatTitle").innerText = chatData.name;
  document.getElementById("memberCount").innerText =
    chatData.members + " members";
}

function goBack(){
  window.location.href = "chats.html";
}

function sendMessage(){
  const input = document.getElementById("messageInput");
  const text = input.value.trim();

  if(text === "") return;

  alert("Message sending will be connected to database later.");
  input.value = "";
}

window.onload = loadChat;