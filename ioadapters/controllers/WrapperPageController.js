let affixesLink;
let highlightsLink;
let resultLink;

let highlightInstructionsPage;
let affixPoolPage;
let resultPage;

function main() {
    setupUiActions();
}

function setupUiActions() {
    affixesLink = document.getElementById("affixesLink");
    highlightsLink = document.getElementById("highlightsLink");
    resultLink = document.getElementById("resultLink");

    highlightInstructionsPage = document.getElementById('highlightInstructionsManagement');
    affixPoolPage = document.getElementById('affixPoolInput');
    resultPage = document.getElementById('result');

    affixesLink.onclick = onAffixesinkClicked;
    highlightsLink.onclick = onHighlightsLinkClicked;
    resultLink.onclick = onResultLinkClicked;

    onAffixesinkClicked();
}

function onAffixesinkClicked() {
    affixesLink.className += ' active';
    highlightsLink.className = 'navlink';
    resultLink.className = 'navlink';

    hideAllPages();
    affixPoolPage.style.display = 'block';
}

function onHighlightsLinkClicked() {
    highlightsLink.className += ' active';
    affixesLink.className = 'navlink';
    resultLink.className = 'navlink';

    hideAllPages();
    highlightInstructionsPage.style.display = 'block';    
}

function onResultLinkClicked() {
    affixesLink.className = ' navlink';
    highlightsLink.className = 'navlink';
    resultLink.className += ' active';

    hideAllPages();
    resultPage.style.display = 'block';        
}

function hideAllPages() {
    highlightInstructionsPage.style.display = 'none';
    affixPoolPage.style.display = 'none';
    resultPage.style.display = 'none';    
}

main();