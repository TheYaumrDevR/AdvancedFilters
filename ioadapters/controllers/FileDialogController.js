let dialog;
let fileSystem;
let window;

module.exports = {
    initFileDialogController: function(dialogReference, fileSystemReference, windowReference) {
        dialog = dialogReference;
        fileSystem = fileSystemReference;
        window = windowReference;
    },
    
    saveContentAs: function(content) {
        const jsonContent = JSON.stringify(content);

        dialog.showSaveDialog((fileName) => {
            fileSystem.writeFile(fileName, jsonContent, (err) => {
                if (err) {
                    alert("An error ocurred creating the file "+ err.message)
                }
            });
        });
    },

    displayAndHandleOpenFileInput: function() {
        const dialogSettings = createOpenDialogSettings();
        const selectedFilesToOpen = dialog.showOpenDialog(window, dialogSettings);
        const fileContent = retrieveSelectedFileContent(selectedFilesToOpen);

        populateUiWithOpenedFileContent(fileContent);
    }
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
    // Send to use case which parses everything using property checks
    // Then sends parsed to all user interfaces
}