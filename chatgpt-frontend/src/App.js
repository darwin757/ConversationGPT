// App.js

import React, { useState } from 'react';
import axios from 'axios';
import CharacterInput from './CharacterInput';
import ConversationDisplay from './ConversationDisplay';

function App() {
  const [conversation, setConversation] = useState([]);
  const [prompts, setPrompts] = useState([]);

  const handleAddPrompt = (newPrompts) => {
    setPrompts(newPrompts);
    // Start the conversation with the first prompt
    getChatGPTResponse(newPrompts[0]);
  };


  const getChatGPTResponse = async (prompt) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/chat', { prompt });
      setConversation((prev) => [...prev, response.data.response]);
      // Continue the conversation with the next prompt
      const nextIndex = prompts.indexOf(prompt) + 1;
      if (nextIndex < prompts.length) {
        getChatGPTResponse(prompts[nextIndex]);
      }
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">ChatGPT Conversations</a>
      </nav>
      <div className="App">
        <CharacterInput onAddPrompt={handleAddPrompt} />
        <ConversationDisplay conversation={conversation} />
      </div>
      <div className="modal fade" id="infoModal" tabIndex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="infoModalLabel">Information</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Here you can provide detailed information or FAQs.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-info mt-3" data-bs-toggle="modal" data-bs-target="#infoModal">More Info</button>
    </div>


  );
}

export default App;
