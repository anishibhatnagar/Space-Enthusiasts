const socket = io(); // Connect to the backend
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message');
const usernameInput = document.getElementById('username');
const sendBtn = document.getElementById('sendBtn');

// Send message when clicking the Send button
sendBtn.addEventListener('click', sendMessage);

// Also send message when pressing Enter key inside the message input field
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

// Function to send a message
function sendMessage() {
  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();

  if (username && message) {
    const msg = { user: username, content: message };
    displayMessage(msg, true); // Display message locally

    socket.emit('chat-message', msg); // Emit message to the server

    messageInput.value = ''; // Clear the message input
  }
}

// Function to display messages in the chat box
function displayMessage(msg, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  if (isUser) messageDiv.classList.add('user');
  messageDiv.innerHTML = `<strong>${msg.user}:</strong> ${msg.content}`;

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
}

// Listen for incoming messages from the server
socket.on('chat-message', (msg) => {
  displayMessage(msg);
});
