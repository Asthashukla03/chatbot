
const chatbotBtn = document.getElementById("chatbot-button");
const chatbox = document.getElementById("chatbox");
const chatInput = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");

chatbotBtn.addEventListener("click", () => {
  chatbox.style.display = chatbox.style.display === "block" ? "none" : "block";
});


chatInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && chatInput.value.trim() !== "") {
    const userMsg = chatInput.value;
    chatBody.innerHTML += `<p><strong>You:</strong> ${userMsg}</p>`;
    chatInput.value = "";

    setTimeout(() => {
      const reply = getBotReply(userMsg);
      chatBody.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
  }
});

function getBotReply(message) {
  message = message.toLowerCase();
  if (message.includes("hi") || message.includes("hello")) return "Hello! 👋 How can I assist you today?";
  if (message.includes("price")) return "Our basic plan starts at $9/month.";
  if (message.includes("help")) return "Sure! What do you need help with?";
  return "Sorry, I didn’t get that. Try asking something else!";
}

document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


function openLogin() {
  document.getElementById("login-modal").style.display = "flex";
}
function closeLogin() {
  document.getElementById("login-modal").style.display = "none";
}
function showSignup() {
  closeLogin();
  document.getElementById("signup-modal").style.display = "flex";
}
function closeSignup() {
  document.getElementById("signup-modal").style.display = "none";
}