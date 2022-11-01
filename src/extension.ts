import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "rh-vscode-extension-ts" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('rh-vscode-extension-ts.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from rh-vscode-extension-ts!!!');
	});

  let button = vscode.commands.registerCommand('rh-vscode-extension-ts.button', function () {
    vscode.window.showInformationMessage('按钮点击');
  });

	context.subscriptions.push(disposable, button);
}

// This method is called when your extension is deactivated
export function deactivate() {}
