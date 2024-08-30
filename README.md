# Code Completion Extension and API

### Overview

This project consists of a Python-based model fine-tuning script, a VS Code extension for code completion, and a Flask API to handle code generation requests. The primary goal is to provide a code completion feature within VS Code, utilizing a fine-tuned machine learning model.

### Key Components

1. **Flask API**: A backend service that generates code completions using a fine-tuned model.
2. **VS Code Extension**: An extension that integrates with the Flask API to provide code completion functionality directly within the VS Code editor.

## Getting Started

### 1. Flask API

#### Setup

1. **Clone the Repository**:
   
   git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   cd copilot_plantoai

2. **Install Dependencies:** Ensure you have Python and pip installed. Then, install the required packages:**

   pip install flask transformers

3. **Run the Flask API:** Make sure you have your model and tokenizer saved in the appropriate directories.**

   python app.py
   The API will be accessible at http://localhost:5000.

### 2. VS Code Extension

   Prerequisites: Ensure you have Node.js and npm installed.
   Install Dependencies: Navigate to the VS Code extension directory and install the required npm packages:

   cd path/to/extension
   npm install

### 3. Run the Extension: 
   You can run and test the extension using VS Code:

   Open VS Code.
   Go to the extension development host by pressing F5.
   Install and test the extension from there.

## Usage
   Using the Flask API:

   POST requests to http://localhost:5000/complete with a JSON payload containing partial code or prompt.

   Type a partial code or prompt in the VS Code editor.
   Use the command palette (Ctrl+Shift+P or Cmd+Shift+P) to select Complete Code or use the keyboard shortcut Ctrl+Alt+C.
   The extension will interact with the Flask API to provide code completions.

