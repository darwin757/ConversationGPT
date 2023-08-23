from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

OPENAI_API_URL = "https://api.openai.com/v1/engines/davinci/completions"
OPENAI_API_KEY = "API-Key"  # Replace with your OpenAI API key

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    prompt = data['prompt']
    response = get_chatgpt_response(prompt)
    return jsonify({"response": response})

def get_chatgpt_response(prompt):
    headers = {
        "Authorization": f"Bearer {OPENAI_API_KEY}",
        "Content-Type": "application/json"
    }
    data = {
        "prompt": prompt,
        "max_tokens": 150
    }
    response = requests.post(OPENAI_API_URL, headers=headers, json=data)
    return response.json()["choices"][0]["text"].strip()

if __name__ == '__main__':
    app.run(debug=True)
