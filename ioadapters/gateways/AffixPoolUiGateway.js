let affixPoolUiGatewayAppWindow;

module.exports = {
    construct: function(injectedApplicationWindow) {
        affixPoolUiGatewayAppWindow = injectedApplicationWindow;
    },

    fillAffixPoolUiWithAffixes: function(affixes) {
        affixPoolUiGatewayAppWindow.webContents.send('populate-affixes-ui', affixes);
    }
}