let affixesLink;
let highlightsLink;
let resultLink;

function main() {
    setupUiActions();
}

function setupUiActions() {
    affixesLink = document.getElementById("affixesLink");
    highlightsLink = document.getElementById("highlightsLink");
    resultLink = document.getElementById("resultLink");

    affixesLink.onclick = onAffixesinkClicked;
    highlightsLink.onclick = onHighlightsLinkClicked;
    resultLink.onclick = onResultLinkClicked;
}

function onAffixesinkClicked() {
    affixesLink.className += ' active';
    highlightsLink.className = 'navlink';
    resultLink.className = 'navlink';
}

function onHighlightsLinkClicked() {
    highlightsLink.className += ' active';
    affixesLink.className = 'navlink';
    resultLink.className = 'navlink';
}

function onResultLinkClicked() {
    affixesLink.className = ' navlink';
    highlightsLink.className = 'navlink';
    resultLink.className += ' active';
}

main();