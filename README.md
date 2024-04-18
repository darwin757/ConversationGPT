# ConversationGPT

ConversationGPT is an interactive chat application that leverages OpenAI's GPT models to simulate intelligent conversations. This project showcases the integration of a React frontend with a Flask backend to provide a seamless chatting experience with AI-driven responses.

## Features

- **Interactive Chat Interface:** Allows users to enter and send prompts to be processed by OpenAI's GPT models.
- **Real-time AI Responses:** Utilizes OpenAI's API to generate dynamic conversations based on user input.
- **Modern, Responsive UI:** Built using React, providing a responsive and engaging user experience.
- **Cross-Origin Resource Sharing (CORS) Enabled:** Ensures that the frontend can securely communicate with the backend without any restrictions.
- **Asynchronous Request Handling:** Uses axios in React for asynchronous API calls to the Flask server, enhancing the application's performance.

## Tech Stack

- **Frontend:** React, axios, Bootstrap
- **Backend:** Flask, Flask-CORS
- **APIs:** OpenAI API
- **Development Tools:** Git, Jest, React Testing Library

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js
- npm or yarn
- Python 3
- Flask
- An API key from OpenAI

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourgithubusername/conversationgpt.git
   cd conversationgpt
2. Set up the frontend
   ```bash
    cd frontend
    npm install
    npm start
  This will run the React application in development mode. Open http://localhost:3000 to view it in the browser.
3. Set up the backend
    
    ```bash
    cd backend
    pip install -r requirements.txt
    export FLASK_APP=app.py
    export OPENAI_API_KEY='Your-OpenAI-API-Key'
    flask run
This starts the Flask server on http://localhost:5000.   

## Usage
To use ConversationGPT, navigate to http://localhost:3000, enter your chat prompts, and receive AI-powered responses instantly.

## Contributing
We welcome contributions to ConversationGPT! If you have suggestions on how to improve the application or want to contribute code, please follow these steps:

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/AmazingFeature).
3. Commit your changes (git commit -m 'Add some AmazingFeature').
4. Push to the branch (git push origin feature/AmazingFeature).
5. Open a Pull Request.

## License
  - This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments
  - OpenAI for providing the API used in this project.
  - All contributors who participate in this project.
