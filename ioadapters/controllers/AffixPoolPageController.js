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

const itemTypeWeapon = 'weapon';
const itemTypeHelmet = 'helmet';
const itemTypeBody = 'body';
const itemTypeBoots = 'boots';
const itemTypeGloves = 'gloves';
const itemTypeAmulets = 'amulets';
const itemTypeRings = 'rings';
const itemTypeBelts = 'belts';
const itemTypeCrimsonJewel = 'crimsonJewel';
const itemTypeViridianJewel = 'viridianJewel';
const itemTypeCobaltJewel = 'cobaltJewel';
const itemTypeMurderousEyeJewel = 'murderousEyeJewel';
const itemTypeSearchingEyeJewel = 'searchingEyeJewel';
const itemTypeHypnoticEyeJewel = 'hypnoticEyeJewel';
const itemTypeGhastlyEyeJewel = 'ghastlyEyeJewel';

function setupAffixPoolPageController() {
    setupUiActions();
    setupIpcListeners();
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

function setupIpcListeners() {
    ipcRenderer.on('populate-affixes-ui', populateAffixesUiWithValuesFromMainProcessEvent);    
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

function populateAffixesUiWithValuesFromMainProcessEvent(event, ...args) {
    const affixPool = args[0];
    affixPool.forEach(value => {
        if (value.hasOwnProperty('itemType') && value.hasOwnProperty('affixPool')) {
            populateAffixTextBasedOnItemType(value.itemType, value.affixPool);
        }
    });

    onAffixPoolChanged();
}

function onWeaponAffixPoolChanged() {
    const itemType = itemTypeWeapon;
    const affixPool = weaponAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onHelmetAffixPoolChanged() {
    const itemType = itemTypeHelmet ;
    const affixPool = helmetAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onBodyAffixPoolChanged() {
    const itemType = itemTypeBody;
    const affixPool = bodyAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onBootsAffixPoolChanged() {
    const itemType = itemTypeBoots;
    const affixPool = bootsAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onGlovesAffixPoolChanged() {
    const itemType = itemTypeGloves;
    const affixPool = glovesAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onAmuletsAffixPoolChanged() {
    const itemType = itemTypeAmulets;
    const affixPool = amuletsAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onRingsAffixPoolChanged() {
    const itemType = itemTypeRings;
    const affixPool = ringsAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onBeltsAffixPoolChanged() {
    const itemType = itemTypeBelts;
    const affixPool = beltsAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onCrimsonJewelAffixPoolChanged() {
    const itemType = itemTypeCrimsonJewel;
    const affixPool = crimsonJewelAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onViridianJewelAffixPoolChanged() {
    const itemType = itemTypeViridianJewel;
    const affixPool = viridianJewelAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onCobaltJewelAffixPoolChanged() {
    const itemType = itemTypeCobaltJewel;
    const affixPool = cobaltJewelAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onMurderousEyeJewelAffixPoolChanged() {
    const itemType = itemTypeMurderousEyeJewel;
    const affixPool = murderousEyeJewelAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onSearchingEyeJewelAffixPoolChanged() {
    const itemType = itemTypeSearchingEyeJewel;
    const affixPool = searchingEyeJewelAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onHypnoticEyeJewelAffixPoolChanged() {
    const itemType = itemTypeHypnoticEyeJewel;
    const affixPool = hypnoticEyeJewelAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function onGhastlyEyeJewelAffixPoolChanged() {
    const itemType = itemTypeGhastlyEyeJewel;
    const affixPool = ghastlyEyeJewelAffixesTextArea.value;

    updateAffixesPersistableDataInteractor.prepareAffixPoolOfItemTypeForPersistence(affixPool, itemType);
}

function populateAffixTextBasedOnItemType(itemType, affixPool) {
    switch (itemType) {
        case itemTypeWeapon:
            weaponAffixesTextArea.value = affixPool;
            break;
        case itemTypeHelmet:
            helmetAffixesTextArea.value = affixPool;
            break;
        case itemTypeBody:
            bodyAffixesTextArea.value = affixPool;
            break;
        case itemTypeBoots:
            bootsAffixesTextArea.value = affixPool;
            break;     
        case itemTypeGloves:
            glovesAffixesTextArea.value = affixPool;
            break; 
        case itemTypeAmulets:
            amuletsAffixesTextArea.value = affixPool;
            break; 
        case itemTypeRings:
            ringsAffixesTextArea.value = affixPool;
            break;       
        case itemTypeBelts:
            beltsAffixesTextArea.value = affixPool;
            break;    
        case itemTypeCrimsonJewel:
            crimsonJewelAffixesTextArea.value = affixPool;
            break;    
        case itemTypeViridianJewel:
            viridianJewelAffixesTextArea.value = affixPool;
            break;   
        case itemTypeCobaltJewel:
            cobaltJewelAffixesTextArea.value = affixPool;
            break;  
        case itemTypeMurderousEyeJewel:
            murderousEyeJewelAffixesTextArea.value = affixPool;
            break;  
        case itemTypeSearchingEyeJewel:
            searchingEyeJewelAffixesTextArea.value = affixPool;
            break;   
        case itemTypeHypnoticEyeJewel:
            hypnoticEyeJewelAffixesTextArea.value = affixPool;
            break;  
        case itemTypeGhastlyEyeJewel:
            ghastlyEyeJewelAffixesTextArea.value = affixPool;
            break;                                               
    }
}

setupAffixPoolPageController();