const updateAffixesPersistableDataInteractor = require('../../interactors/UpdatePersistableDataInteractor');

let weaponAffixesTextArea;
let helmetAffixesTextArea;
let bodyAffixesTextArea;
let bootsAffixesTextArea;
let glovesAffixesTextArea;
let amuletsAffixesTextArea;
let ringsAffixesTextArea;
let beltsAffixesTextArea;
let crimsonJewelAffixesTextArea;
let viridianJewelAffixesTextArea;
let cobaltJewelAffixesTextArea;
let murderousEyeJewelAffixesTextArea;
let searchingEyeJewelAffixesTextArea;
let hypnoticEyeJewelAffixesTextArea;
let ghastlyEyeJewelAffixesTextArea;

function setupAffixPoolPageController() {
    alert("main");
    setupUiActions();
}

function setupUiActions() {
    weaponAffixesTextArea = document.getElementById("weapon-affixes");
    helmetAffixesTextArea = document.getElementById("helmet-affixes");
    bodyAffixesTextArea = document.getElementById("body-affixes");
    bootsAffixesTextArea = document.getElementById("boots-affixes");
    glovesAffixesTextArea = document.getElementById("gloves-affixes");
    amuletsAffixesTextArea = document.getElementById("amulets-affixes");
    ringsAffixesTextArea = document.getElementById("rings-affixes");
    beltsAffixesTextArea = document.getElementById("belts-affixes");
    crimsonJewelAffixesTextArea = document.getElementById("crimson-jewel-affixes");
    viridianJewelAffixesTextArea = document.getElementById("viridian-jewel-affixes");
    cobaltJewelAffixesTextArea = document.getElementById("cobalt-jewel-affixes");
    murderousEyeJewelAffixesTextArea = document.getElementById("murderous-eye-jewel-affixes");
    searchingEyeJewelAffixesTextArea = document.getElementById("searching-eye-jewel-affixes");
    hypnoticEyeJewelAffixesTextArea = document.getElementById("hypnotic-eye-jewel-affixes");
    ghastlyEyeJewelAffixesTextArea = document.getElementById("ghastly-eye-jewel-affixes");

    weaponAffixesTextArea.oninput = onAffixPoolChanged;
    helmetAffixesTextArea.oninput = onAffixPoolChanged;
    bodyAffixesTextArea.oninput = onAffixPoolChanged;
    bootsAffixesTextArea.oninput = onAffixPoolChanged;
    glovesAffixesTextArea.oninput = onAffixPoolChanged;
    amuletsAffixesTextArea.oninput = onAffixPoolChanged;
    ringsAffixesTextArea.oninput = onAffixPoolChanged;
    beltsAffixesTextArea.oninput = onAffixPoolChanged;
    crimsonJewelAffixesTextArea.oninput = onAffixPoolChanged;
    viridianJewelAffixesTextArea.oninput = onAffixPoolChanged;
    cobaltJewelAffixesTextArea.oninput = onAffixPoolChanged;
    murderousEyeJewelAffixesTextArea.oninput = onAffixPoolChanged;
    searchingEyeJewelAffixesTextArea.oninput = onAffixPoolChanged;
    hypnoticEyeJewelAffixesTextArea.oninput = onAffixPoolChanged;
    ghastlyEyeJewelAffixesTextArea.oninput = onAffixPoolChanged;
}

function onAffixPoolChanged() {
    updateAffixesPersistableDataInteractor.affixPoolChanged();

    onWeaponAffixPoolChanged();
    onHelmetAffixPoolChanged();
    onBodyAffixPoolChanged();
    onBootsAffixPoolChanged();
    onGlovesAffixPoolChanged();
    onAmuletsAffixPoolChanged();
    onRingsAffixPoolChanged();
    onBeltsAffixPoolChanged();
    onCrimsonJewelAffixPoolChanged();
    onViridianJewelAffixPoolChanged();
    onCobaltJewelAffixPoolChanged();
    onMurderousEyeJewelAffixPoolChanged();
    onSearchingEyeJewelAffixPoolChanged();
    onHypnoticEyeJewelAffixPoolChanged();
    onGhastlyEyeJewelAffixPoolChanged();
}

function onWeaponAffixPoolChanged() {
    const itemType = "weapon";
    const affixPool = weaponAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onHelmetAffixPoolChanged() {
    const itemType = "helmet";
    const affixPool = helmetAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onBodyAffixPoolChanged() {
    const itemType = "body";
    const affixPool = bodyAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onBootsAffixPoolChanged() {
    const itemType = "boots";
    const affixPool = bootsAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onGlovesAffixPoolChanged() {
    const itemType = "gloves";
    const affixPool = glovesAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onAmuletsAffixPoolChanged() {
    const itemType = "amulets";
    const affixPool = amuletsAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onRingsAffixPoolChanged() {
    const itemType = "rings";
    const affixPool = ringsAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onBeltsAffixPoolChanged() {
    const itemType = "belts";
    const affixPool = beltsAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onCrimsonJewelAffixPoolChanged() {
    const itemType = "crimsonJewel";
    const affixPool = crimsonJewelAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onViridianJewelAffixPoolChanged() {
    const itemType = "viridianJewel";
    const affixPool = viridianJewelAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onCobaltJewelAffixPoolChanged() {
    const itemType = "cobaltJewel";
    const affixPool = cobaltJewelAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onMurderousEyeJewelAffixPoolChanged() {
    const itemType = "murderousEyeJewel";
    const affixPool = murderousEyeJewelAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onSearchingEyeJewelAffixPoolChanged() {
    const itemType = "searchingEyeJewel";
    const affixPool = searchingEyeJewelAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onHypnoticEyeJewelAffixPoolChanged() {
    const itemType = "hypnoticEyeJewel";
    const affixPool = hypnoticEyeJewelAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onGhastlyEyeJewelAffixPoolChanged() {
    const itemType = "ghastlyEyeJewel";
    const affixPool = ghastlyEyeJewelAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

setupAffixPoolPageController();