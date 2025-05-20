// Replace with your Gemini API key
const API_KEY = 'AIzaSyBqLyEM3KTC1eVJakW3gIkug1C4cPvN-a8';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Function to add a message to the chat
function addMessage(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageDiv.appendChild(messageText);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to get response from Gemini API
async function getGeminiResponse(prompt) {
    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are an ayurvedic assistant. Answer the user's question in less than 50 words: ${prompt}`
                    }]
                }]
            })
        });

        const data = await response.json();
        
        // Check if there's an error in the response
        if (data.error) {
            console.error('API Error:', data.error);
            return `Error: ${data.error.message || 'Unknown error occurred'}`;
        }
        
        // Check if the response has the expected structure
        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
            return data.candidates[0].content.parts[0].text;
        } else {
            console.error('Unexpected API response structure:', data);
            return 'Sorry, I had trouble processing your request. Please try again.';
        }
    } catch (error) {
        console.error('Error:', error);
        return 'Sorry, I encountered an error. Please try again.';
    }
}

// Function to handle sending messages
async function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // Add user message to chat
    addMessage(message, true);
    userInput.value = '';

    // Disable input while waiting for response
    userInput.disabled = true;
    sendButton.disabled = true;

    // Get and add bot response
    const response = await getGeminiResponse(message);
    addMessage(response, false);

    // Re-enable input
    userInput.disabled = false;
    sendButton.disabled = false;
    userInput.focus();
}

// Event listeners
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
}); 