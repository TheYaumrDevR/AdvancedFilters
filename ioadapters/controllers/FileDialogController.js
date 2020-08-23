let dialog;
let fileSystem;

const setupUserInterfaceWithOpenedDataInteractor = require('../../interactors/SetupUserInterfaceWithOpenedFileDataInteractor');

module.exports = {
    initFileDialogController: function(dialogReference, fileSystemReference) {
        dialog = dialogReference;
        fileSystem = fileSystemReference;
    },
    
    saveContentAs: function(content) {
        const jsonContent = JSON.stringify(content);
        const dialogSettings = createSaveAsDialogSettings();

        dialog.showSaveDialog(dialogSettings, (fileName) => {
            fileSystem.writeFile(fileName, jsonContent, (err) => {
                if (err) {
                    alert("An error ocurred creating the file "+ err.message)
                }
            });
        });
    },

    displayAndHandleOpenFileInput: function() {
        const dialogSettings = createOpenDialogSettings();
        const selectedFilesToOpen = dialog.showOpenDialog(dialogSettings);
        const fileContent = retrieveSelectedFileContent(selectedFilesToOpen);

        populateUiWithOpenedFileContent(fileContent);
    }
}

function createSaveAsDialogSettings() {
    const result = {
        properties: ['createDirectory', 'showOverwriteConfirmation'],
        filters: [
            {
                name: 'Advanced Filters Combination Setup',
                extensions: ['json']
            }
        ]
    };  
    
    return result;
}

function createOpenDialogSettings() {
    const result = {
        properties: ['openFile'],
        filters: [
            {
                name: 'Advanced Filters Combination Setup',
                extensions: ['json']
            }
        ]
    };
    
    return result;
}

function retrieveSelectedFileContent(openDialogFiles) {
    if (!openDialogFiles) {
        return {};
    }

    const selectedFile = openDialogFiles[0];
    return fileSystem.readFileSync(selectedFile);
}

function populateUiWithOpenedFileContent(fileContent) {
    const parsedFileContent = JSON.parse(fileContent);
    setupUserInterfaceWithOpenedDataInteractor.setupUserInterfaceWithLoadedData(parsedFileContent);
}