let dialog;
let fileSystem;

module.exports = {
    initFileDialogController: function(dialogReference, fileSystemReference) {
        dialog = dialogReference;
        fileSystem = fileSystemReference;
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
    }
}