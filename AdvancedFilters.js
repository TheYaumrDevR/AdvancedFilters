const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron');
const filterDialogController = require('./ioadapters/controllers/FileDialogController');

const url = require('url');
const path = require('path');

const fileSystem = require('fs');

let dataToSave = {};

function main() {
    injectDependencies();
    app.on('ready', createWindow);
    setupMessageHandlerForRendererMessages();
}

function injectDependencies() {
    filterDialogController.initFileDialogController(dialog, fileSystem);
}

function setupMessageHandlerForRendererMessages() {
    ipcMain.on('renderer-to-main-async', (event, arg) => {
        dataToSave = arg;
    });  
}

function createWindow() {
    const window = new BrowserWindow({width: 1100, height: 710});
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'technical/views/highlightRules.html'),
        protocol: 'file:',
        slashes: true
    }));

    setupWindowMenu();
}

function setupWindowMenu() {
    const menuTemplate = [
        {label: 'File', submenu: [
            {label: 'New', click: function() { onNewFileButtonPressed(); }},
            {label: 'Open', click: function() { onOpenButtonPressed(); }},
            {label: 'Save', click: function() { onSaveButtonPressed(); }},
            {label: 'Save As', click: function() { onSaveAsButtonPressed(); }},
            {type: 'separator'},
            {label: 'Exit', click: function() { onExitButtonPressed(); }}
        ]}
      ];

      Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));    
}

function onNewFileButtonPressed() {

}

function onOpenButtonPressed() {

}

function onSaveButtonPressed() {

}

function onSaveAsButtonPressed() {
    filterDialogController.saveContentAs(dataToSave);
}

function onExitButtonPressed() {
    app.quit();
}

main();