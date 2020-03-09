// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('mazz.openWithFinder', function (e) {

    //console.log('e.path: ' + e.path );

    const cp = require('child_process')
    cp.exec(`open "${e.path}"`, (err, stdout, stderr) => {
      // console.log('stdout: ' + stdout);
      // console.log('stderr: ' + stderr);
      let message = 'Opening “' + e.path.split('/').pop() + '”';
      //vscode.window.showInformationMessage(message);
      vscode.window.setStatusBarMessage(message, 8000);
      if (err) {
        vscode.window.showErrorMessage(
          'e.path: ' + e.path + '\n'+
          'error: ' + err + '\n'+
          'stdout: ' + stdout + '\n'+
          'stderr: ' + stderr
        );
      }
    });

});

  context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
}
