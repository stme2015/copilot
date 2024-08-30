// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const axios = require('axios');
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

async function completeCode(partialCode) {
    try {
        const response = await axios.post('http://127.0.0.1:5000/complete', {
            text: partialCode // this key should match Flask app
        });

        let completion = response.data.completion;

        // Remove text before 'def' if present
        if (completion.includes('def ')) {
            const startIndex = completion.indexOf('def ');
            completion = completion.substring(startIndex).trim();
        }

        // Handle code block delimiters
        if (completion.includes('```python')) {
            let startIndex = completion.indexOf('```python') + '```python'.length;
            let endIndex = completion.indexOf('```', startIndex);
            if (endIndex === -1) {
                endIndex = completion.length; // No closing ``` found, take till the end
            }
            completion = completion.substring(startIndex, endIndex).trim();
        }

        // Remove any trailing ```, if present
        if (completion.endsWith('```')) {
            completion = completion.slice(0, -3).trim(); // Remove the trailing ```
        }

        return completion;
        
    } catch (error) {
        console.error('Error contacting the backend:', error);
        return 'Error contacting the backend.';
    }
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "codegen-pilot" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extension.completeCode', async function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const text = document.getText(selection);

            console.log('Selected text:', text);

            // Call the completeCode function
            const completion = await completeCode(text);

            editor.edit(editBuilder => {
                editBuilder.insert(selection.end, `\n${completion}`);
            });
        }
    });

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
