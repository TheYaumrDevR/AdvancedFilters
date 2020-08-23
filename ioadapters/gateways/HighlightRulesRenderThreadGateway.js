let applicationWindow;

module.exports = {
    construct: function(injectedApplicationWindow) {
        applicationWindow = injectedApplicationWindow;
    },

    fillHighlightRulesUiWithLowValueHighlightRule: function(highlightRuleValue) {
        applicationWindow.webContents.send('populate-low-value-highlight-rule', highlightRuleValue);
    },

    fillHighlightRulesUiWithMediumValueHighlightRule: function(highlightRuleValue) {
        applicationWindow.webContents.send('populate-mid-value-highlight-rule', highlightRuleValue);
    },
    
    fillHighlightRulesUiWithHighValueHighlightRule: function(highlightRuleValue) {
        applicationWindow.webContents.send('populate-high-value-highlight-rule', highlightRuleValue);
    }    
}