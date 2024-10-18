
let messageHistory = [];

const userInput = document.getElementById('user-input');
userInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});

async function sendMessage() {

    const message = userInput.value;

    if (message.trim() === '') {
        return;
    }

    addMessageToChat('user', message);
    userInput.value = '';

    const response = await fetch('http://127.0.0.1:5000/send_message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: message,
            message_history: messageHistory,
        }),
    })

    const data = await response.json();

    const botResponse = data.response;
    console.log(data);
    

    messageHistory.push(botResponse);
    addMessageToChat('bot', formatBotMessage(botResponse));

}

function addMessageToChat(sender, message) {
    console.log(message);

    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('p');

    if (sender === 'user') {
        messageElement.className = 'user-message';
    } else {
        messageElement.className = 'bot-message';
    }

    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}


function formatBotMessage(message) {
    if (message) {
        message = message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        message = message.replace(/\*(.*?)\*/g, '<em>$1</em>');
        message = message.replace(/_~(.*?)~_/g, '<u>$1</u>'); 

        return message;
    }
    
    return '';
}