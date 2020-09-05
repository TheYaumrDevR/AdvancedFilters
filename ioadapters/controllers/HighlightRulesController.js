const updatePersistableDataInteractor = require('../../interactors/UpdatePersistableDataInteractor');
const { ipcRenderer } = require('electron');

let lowValueSettingTextarea;
let midValueSettingTextarea;
let highValueSettingTextarea

function main() {
    setupUiActions();
    setupIpcListeners();
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

function setupIpcListeners() {
    ipcRenderer.on('populate-low-value-highlight-rule', populateLowValueHiglightRuleTextareaFromMainProcessEvent);
    ipcRenderer.on('populate-mid-value-highlight-rule', populateMidValueHiglightRuleTextareaFromMainProcessEvent);
    ipcRenderer.on('populate-high-value-highlight-rule', populateHighValueHiglightRuleTextareaFromMainProcessEvent);
}

function populateLowValueHiglightRuleTextareaFromMainProcessEvent(event, ...args) {
    lowValueSettingTextarea.value = args[0];
    onHighlightSettingChanged();
}

function populateMidValueHiglightRuleTextareaFromMainProcessEvent(event, ...args) {
    midValueSettingTextarea.value = args[0];
    onHighlightSettingChanged();
}

function populateHighValueHiglightRuleTextareaFromMainProcessEvent(event, ...args) {
    highValueSettingTextarea.value = args[0];
    onHighlightSettingChanged();
}

main();