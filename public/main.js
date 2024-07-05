// connect client to socket.io server
const socket = io();
 
// Get the input and button elements
const messageInput = document.querySelector('#message');
const button = document.querySelector('button');
const nameInput = document.querySelector('#name');

// Function to handle sending a message
function sendMessage() {
    // Get the message text from the input
    message = messageInput.value;
    nameSender = nameInput.value;

    // Send message to server
    socket.emit('newMessage', {
        sender: nameSender,
        message: message
    });
   
    console.log(`The message I am sending to server is: "${message}"`);

    // Clear the input field
    messageInput.value = '';
}

// Function to add a new message to the chat

function addMessage(){
    socket.on('dispenseMessage', data => {
        const { sender , message } = data;
        console.log(`I have received the information: "${message}"`);
    
        // make a message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${sender} : ${message}`;
    
        // add to container
        const messageContainer = document.querySelector('.message-container');
        messageContainer.appendChild(messageElement);
    })
}

// Add event listeners to the button for sending message and adding message to chat
function handleClick(event) {
    sendMessage(event);
    addMessage(event);
}

button.addEventListener('click', handleClick);