let dialog;
let fileSystem;

module.exports = {
    initFileDialogController: function(dialogReference, fileSystemReference) {
        dialog = dialogReference;
        fileSystem = fileSystemReference;
    },
    
    saveContentAs: function(content) {
        const jsonContent = JSON.stringify(content);

        dialog.showSaveDialogSync((fileName) => {
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