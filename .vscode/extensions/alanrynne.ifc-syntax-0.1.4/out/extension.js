"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    console.log('IFC-Syntax has been activated.');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    // let disposable = vscode.commands.registerCommand('extension.GetFileInfo', () => {
    // 	// The code you place here will be executed every time your command is executed
    // 	// Display a message box to the user
    // 	vscode.window.showInformationMessage('Get file info has been called!');
    // });
    // let hover = vscode.languages.registerHoverProvider('ifc', {
    // 	provideHover(document, position, token) {
    // 		return new vscode.Hover('I am a hover!');
    // 	}
    // });
    // context.subscriptions.push(disposable);
    // context.subscriptions.push(hover);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map