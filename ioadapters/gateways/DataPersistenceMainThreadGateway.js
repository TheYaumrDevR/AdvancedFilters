const {ipcRenderer} = require('electron');

module.exports = {
    persistDataOnMainThread: function(filteringAndHighlightRules) {
        ipcRenderer.send('renderer-to-main-async', filteringAndHighlightRules);
    }
}