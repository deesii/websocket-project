// init socket.io
const socket = io();
 
// Get the input and button elements
const messageInput = document.querySelector('#message-input');
const button = document.querySelector('button');

// Function to handle sending a message
function sendMessage() {
    // Get the message text from the input
    const message = messageInput.value;

    // TODO send message to server

    // Clear the input field
    messageInput.value = '';
}

// TODO create function to add a new message to the chat

// Add event listener to the button for sending a message
button.addEventListener('click', sendMessage);

// TODO add event listener for new messages