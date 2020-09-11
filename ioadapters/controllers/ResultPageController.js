const generateResultFilterInteractor = require('../../interactors/GenerateResultFilterInteractor');

let generateFilterButton;
let kNumberInputField;

function resultPageControllerMain() {
    setupUiActions();
}

function setupUiActions() {
    generateFilterButton = document.getElementById("generate-filter");
    generateFilterButton.addEventListener("click", onGenerateFilterButtonClicked);

    kNumberInputField = document.getElementById("combination-amount-input");
}

function onGenerateFilterButtonClicked() {
    const weaponAffixesText = weaponAffixesTextArea.value;
    const helmetAffixesText = helmetAffixesTextArea.value;
    const bodyAffixesText = bodyAffixesTextArea.value;
    const bootsAffixesText = bootsAffixesTextArea.value;
    const glovesAffixesText = glovesAffixesTextArea.value;
    const amuletsAffixesText = amuletsAffixesTextArea.value;
    const ringsAffixesText = ringsAffixesTextArea.value;
    const beltsAffixesText = beltsAffixesTextArea.value;
    const crimsonJewelAffixesText = crimsonJewelAffixesTextArea.value;
    const viridianJewelAffixesText = viridianJewelAffixesTextArea.value;
    const cobaltJewelAffixesText = cobaltJewelAffixesTextArea.value;
    const murderousEyeJewelAffixesText = murderousEyeJewelAffixesTextArea.value;
    const searchingEyeJewelAffixesText = searchingEyeJewelAffixesTextArea.value;
    const hypnoticEyeJewelAffixesText = hypnoticEyeJewelAffixesTextArea.value;
    const ghatslyEyeJewelAffixesText = ghastlyEyeJewelAffixesTextArea.value;

    const weaponAffixes = weaponAffixesText.match(/[^\r\n]+/g);
    const helmetAffixes = helmetAffixesText.match(/[^\r\n]+/g);
    const bodyAffixes = bodyAffixesText.match(/[^\r\n]+/g);
    const bootsAffixes = bootsAffixesText.match(/[^\r\n]+/g);
    const glovesAffixes = glovesAffixesText.match(/[^\r\n]+/g);
    const amuletAffixes = amuletsAffixesText.match(/[^\r\n]+/g);
    const ringsAffixes = ringsAffixesText.match(/[^\r\n]+/g);
    const beltsAffixes = beltsAffixesText.match(/[^\r\n]+/g);
    const crimsonJewelAffixes = crimsonJewelAffixesText.match(/[^\r\n]+/g);
    const viridianJewelAffixes = viridianJewelAffixesText.match(/[^\r\n]+/g);
    const cobaltJewelAffixes = cobaltJewelAffixesText.match(/[^\r\n]+/g);
    const murderousEyeJewelAffixes = murderousEyeJewelAffixesText.match(/[^\r\n]+/g);
    const searchingEyeJewelAffixes = searchingEyeJewelAffixesText.match(/[^\r\n]+/g);
    const hypnoticEyeJewelAffixes = hypnoticEyeJewelAffixesText.match(/[^\r\n]+/g);
    const ghastlyEyeJewelAffixes = ghatslyEyeJewelAffixesText.match(/[^\r\n]+/g);

    const equipmentTypesWithAffixPool = [];
    equipmentTypesWithAffixPool.push({itemType: 'weapon', affixes: weaponAffixes});
    equipmentTypesWithAffixPool.push({itemType: 'helmet', affixes: helmetAffixes});
    equipmentTypesWithAffixPool.push({itemType: 'body', affixes: bodyAffixes});
    equipmentTypesWithAffixPool.push({itemType: 'boots', affixes: bootsAffixes});
    equipmentTypesWithAffixPool.push({itemType: 'gloves', affixes: glovesAffixes});
    equipmentTypesWithAffixPool.push({itemType: 'amulets', affixes: amuletAffixes});
    equipmentTypesWithAffixPool.push({itemType: 'rings', affixes: ringsAffixes});
    equipmentTypesWithAffixPool.push({itemType: 'belts', affixes: beltsAffixes});
    equipmentTypesWithAffixPool.push({itemType: 'crimsonJewel', affixes: crimsonJewelAffixes});
    equipmentTypesWithAffixPool.push({itemType: 'viridianJewel', affixes: viridianJewelAffixes});
    equipmentTypesWithAffixPool.push({itemType: 'cobaltJewel', affixes: cobaltJewelAffixes});
    equipmentTypesWithAffixPool.push({itemType: 'murderousEyeJewel', affixes: murderousEyeJewelAffixes});
    equipmentTypesWithAffixPool.push({itemType: 'searchingEyeJewel', affixes: searchingEyeJewelAffixes});
    equipmentTypesWithAffixPool.push({itemType: 'hypnoticEyeJewel', affixes: hypnoticEyeJewelAffixes});
    equipmentTypesWithAffixPool.push({itemType: 'ghastlyEyeJewel', affixes: ghastlyEyeJewelAffixes});

    const kChooseNumber = parseInt(kNumberInputField.value);

    generateResultFilterInteractor.combineAffixPoolsOfEquipments(equipmentTypesWithAffixPool, kChooseNumber);
}

resultPageControllerMain();