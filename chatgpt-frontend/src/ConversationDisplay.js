// ConversationDisplay.js

import React from 'react';

function ConversationDisplay({ conversation }) {
    return (
        <div className="container mt-5">
            <h2>Conversation</h2>
            <div className="border p-3">
                {conversation.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
            </div>
        </div>
    );    
}

export default ConversationDisplay;
