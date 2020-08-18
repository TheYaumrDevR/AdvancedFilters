const updatePersistableDataInteractor = require('../../interactors/UpdatePersistableDataInteractor');

let lowValueSettingTextarea;
let midValueSettingTextarea;
let highValueSettingTextarea

function main() {
    setupUiActions();
}

function setupUiActions() {
    lowValueSettingTextarea = document.getElementById("lowValueSettingText");
    midValueSettingTextarea = document.getElementById("midValueSettingText");
    highValueSettingTextarea = document.getElementById("highValueSettingText");

    lowValueSettingTextarea.oninput = onHighlightSettingChanged;
    midValueSettingTextarea.oninput = onHighlightSettingChanged;
    highValueSettingTextarea.oninput = onHighlightSettingChanged;
}

function onHighlightSettingChanged() {
    const highLightingRules = {};
    highLightingRules.lowValueHighlightingRule = lowValueSettingTextarea.value;
    highLightingRules.midValueHighlightingRule = midValueSettingTextarea.value;
    highLightingRules.highValueHighlightingRule = highValueSettingTextarea.value;

    updatePersistableDataInteractor.prepareHighlightingRulesForFuturePersistence(highLightingRules);
}

main();