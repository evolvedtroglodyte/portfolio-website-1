// ===================================
// Chatbot JavaScript - AI Integration
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const chatbotTrigger = document.getElementById('chatbot-trigger');
    const chatbotModal = document.getElementById('chatbot-modal');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const typingIndicator = document.getElementById('typing-indicator');

    // Open chatbot modal
    chatbotTrigger.addEventListener('click', function() {
        chatbotModal.classList.add('active');
        chatbotInput.focus();
    });

    // Close chatbot modal
    chatbotClose.addEventListener('click', function() {
        chatbotModal.classList.remove('active');
    });

    // Close on outside click
    chatbotModal.addEventListener('click', function(e) {
        if (e.target === chatbotModal) {
            chatbotModal.classList.remove('active');
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && chatbotModal.classList.contains('active')) {
            chatbotModal.classList.remove('active');
        }
    });

    // Handle form submission
    chatbotForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const message = chatbotInput.value.trim();
        if (!message) return;

        // Add user message to chat
        addMessage(message, 'user');

        // Clear input
        chatbotInput.value = '';

        // Show typing indicator
        showTypingIndicator();

        // Send message to backend
        try {
            const response = await sendMessageToBot(message);
            hideTypingIndicator();
            addMessage(response, 'bot');
        } catch (error) {
            hideTypingIndicator();
            addMessage('Sorry, I encountered an error. Please try again.', 'bot');
            console.error('Chatbot error:', error);
        }
    });

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = sender === 'bot'
            ? '<i class="fas fa-robot"></i>'
            : '<i class="fas fa-user"></i>';

        const content = document.createElement('div');
        content.className = 'message-content';

        const p = document.createElement('p');
        p.textContent = text;
        content.appendChild(p);

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);

        chatbotMessages.appendChild(messageDiv);

        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Show typing indicator
    function showTypingIndicator() {
        typingIndicator.classList.add('active');
    }

    // Hide typing indicator
    function hideTypingIndicator() {
        typingIndicator.classList.remove('active');
    }

    // Send message to n8n webhook
    async function sendMessageToBot(message) {
        try {
            const response = await fetch('https://evolvedtroglodyte.app.n8n.cloud/webhook/portfolio-website', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('Chatbot API error:', errorData);
                throw new Error(errorData.error || 'Failed to get response from chatbot');
            }

            const data = await response.json();

            // Enhanced debugging - log the full response structure
            console.log('=== RESPONSE DEBUGGING ===');
            console.log('Full response object:', data);
            console.log('Response type:', typeof data);
            console.log('All keys:', Object.keys(data));
            console.log('========================');

            // Try to extract message from various possible structures
            let extractedMessage = null;

            // Check standard fields first (data.message, data.output, data.response)
            if ('message' in data && typeof data.message === 'string') {
                extractedMessage = data.message;
                console.log('✓ Found data.message:', extractedMessage);
            } else if ('output' in data && typeof data.output === 'string') {
                extractedMessage = data.output;
                console.log('✓ Found data.output:', extractedMessage);
            } else if ('response' in data && typeof data.response === 'string') {
                extractedMessage = data.response;
                console.log('✓ Found data.response:', extractedMessage);
            } else {
                // Handle n8n's nested structure - recursively search for "output" field
                console.log('Checking nested structure...');

                function findOutput(obj, depth = 0) {
                    if (depth > 10) return null; // Prevent infinite recursion

                    if (obj && typeof obj === 'object') {
                        // Check for output field (case-insensitive)
                        if ('output' in obj && typeof obj.output === 'string') {
                            return obj.output;
                        }
                        if ('Output' in obj && typeof obj.Output === 'string') {
                            return obj.Output;
                        }
                        // Recursively search all values
                        for (const value of Object.values(obj)) {
                            const result = findOutput(value, depth + 1);
                            if (result) return result;
                        }
                    } else if (typeof obj === 'string' && obj.length > 20) {
                        // If we find a long string, it's likely the response
                        return obj;
                    }
                    return null;
                }

                extractedMessage = findOutput(data);
                if (extractedMessage) {
                    console.log('✓ Found nested output:', extractedMessage);
                }
            }

            if (extractedMessage) {
                return extractedMessage;
            } else {
                console.error('✗ Could not find message in response.');
                console.error('Expected format: { "message": "text" } or nested n8n format');
                console.error('Received:', JSON.stringify(data, null, 2));
                return 'Error: Invalid response format from server. Please check the console for details.';
            }
        } catch (error) {
            console.error('Chatbot error details:', error);
            throw error;
        }
    }

    console.log('Chatbot initialized successfully!');
});
