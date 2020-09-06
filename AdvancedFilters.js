const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron');
const filterDialogController = require('./ioadapters/controllers/FileDialogController');
const highlightRulesRenderThreadGateway = require('./ioadapters/gateways/HighlightRulesRenderThreadGateway');
const affixPoolUiGateway = require('./ioadapters/gateways/AffixPoolUiGateway');

const url = require('url');
const path = require('path');
const fileSystem = require('fs');

let mainWindow;

let dataToSave = {};

function main() {
    app.on('ready', onAppIsReady);
    setupMessageHandlerForRendererMessages();
}

function onAppIsReady() {
    createWindow();
    injectDependencies();
}

function injectDependencies() {
    filterDialogController.initFileDialogController(dialog, fileSystem);
    highlightRulesRenderThreadGateway.construct(mainWindow);
    affixPoolUiGateway.construct(mainWindow);
}

function setupMessageHandlerForRendererMessages() {
    ipcMain.on('renderer-to-main-async', (event, arg) => {
        dataToSave = arg;
    });  
}

function createWindow() {
    mainWindow = new BrowserWindow({width: 1270, height: 980});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'technical/views/index.html'),
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
    filterDialogController.displayAndHandleOpenFileInput();
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