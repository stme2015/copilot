### Code Completion Extension and API

### Overview

The Code Completion Co-Pilot project integrates a VS Code extension with a Flask backend to provide intelligent code completion capabilities. By utilizing a fine-tuned transformer model, the system enhances productivity and coding efficiency. The project demonstrates a robust implementation of both frontend and backend components, with careful handling of various input cases to ensure a seamless user experience.

### Key Components

1. **Flask API**: A backend service that generates code completions using a fine-tuned model.
2. **VS Code Extension**: An extension that integrates with the Flask API to provide code completion functionality directly within the VS Code editor.

## Getting Started

### 1. Flask API

#### Setup

1. **Clone the Repository**:
   
   git clone https://github.com/stme2015/copilot.git

   cd copilot

3. **Install Dependencies**: Ensure you have Python and pip installed. Then, install the required packages:

      pip install flask transformers

4. **Run the Flask API**: Make sure you have your model and tokenizer saved in the appropriate directories.

     python app.py
     The API will be accessible at http://localhost:5000.

### 2. VS Code Extension

**Setup**

1. Prerequisites: Ensure you have Node.js and npm installed.

2. Install Dependencies: Navigate to the VS Code extension directory and install the required npm packages:

     cd path/to/extension
     npm install

3. Run the Extension: You can run and test the extension using VS Code:

     Open VS Code.
     Go to the extension development host by pressing F5.
     Install and test the extension from there.

**Usage**

Using the VS Code Extension:

   Type a partial code or prompt in the VS Code editor.
   Use the command palette (Ctrl+Shift+P or Cmd+Shift+P) to select Complete Code or use the keyboard shortcut Ctrl+Alt+C.
   The extension will interact with the Flask API to provide code completions.
