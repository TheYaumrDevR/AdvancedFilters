const retrievalFunctionBySelectionId = {
    lowValueHighlight: getLowValueHighlightInstruction,
    midValueHighlight: getMidValueHighlightInstruction,
    highValueHighlight: getHighValueHighlightInstruction
}

module.exports = {
    getHighlightInstructionBasedOnSelectedHighlightInstruction: function(selectedHighlightInstructionId) {
        const retrievalFunction = retrievalFunctionBySelectionId[selectedHighlightInstructionId];
        const highlighInstruction = retrievalFunction();

        const highLightInstructionWithTabs = highlighInstruction.replace(/\n/g, '\n\t');
        const highLightInstructionWithIntialTab = '\t' + highLightInstructionWithTabs;

        return highLightInstructionWithIntialTab;
    }
}

function getLowValueHighlightInstruction() {
    return lowValueSettingTextarea.value;
}

function getMidValueHighlightInstruction() {
    return midValueSettingTextarea.value;
}

function getHighValueHighlightInstruction() {
    return highValueSettingTextarea.value;
}