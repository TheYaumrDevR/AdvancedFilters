let dialog;
let fileSystem;

module.exports = {
    initFileDialogController: function(dialogReference, fileSystemReference) {
        dialog = dialogReference;
        fileSystem = fileSystemReference;
    },
    
    saveContentAs: function() {
        const content = "";
    
        dialog.showSaveDialog((fileName) => {
            fileSystem.writeFile(fileName, content, (err) => {
                if (err) {
                    alert("An error ocurred creating the file "+ err.message)
                }
            });
        });
    }
}