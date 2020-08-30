function main() {
    setupUiActions();
}

function setupUiActions() {
    const combinationsLink = document.getElementById("combinationsLink");
    const instructionsLink = document.getElementById("instructionsLink");

    combinationsLink.onclick = onCombinationsLinkClicked;
    instructionsLink.onclick = onInstructionsLinkClicked;
}

function onCombinationsLinkClicked() {
    combinationsLink.className += ' active';
    instructionsLink.className = 'navlink';
}

function onInstructionsLinkClicked() {
    instructionsLink.className += ' active';
    combinationsLink.className = 'navlink';
}

main();