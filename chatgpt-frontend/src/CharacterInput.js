// CharacterInput.js

import React, { useState } from 'react';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';


function CharacterInput({ onAddPrompt }) {
    const [prompts, setPrompts] = useState(['', '', '', '', '']);

    const handleInputChange = (index, event) => {
        const newPrompts = [...prompts];
        newPrompts[index] = event.target.value;
        setPrompts(newPrompts);
    };

    const handleSubmit = () => {
        onAddPrompt(prompts);
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click to start the conversation!
        </Tooltip>
    );


    return (
        <div className="card mt-5">
            <div className="card-header">
                Create ChatGPT Characters
    </div>
            <div className="card-body">
                <div className="container mt-5">
                    <h2>Create ChatGPT Characters</h2>
                    {prompts.map((prompt, index) => (
                        <div key={index} className="mb-3">
                            <label className="form-label">Character {index + 1} Prompt:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={prompt}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                        </div>
                    ))}
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <Button variant="primary" onClick={handleSubmit}>Start Conversation</Button>
                    </OverlayTrigger>
                </div>
            </div>
        </div>

    );

}

export default CharacterInput;
