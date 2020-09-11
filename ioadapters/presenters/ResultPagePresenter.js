let resultFilterTextArea;

module.exports = {
    constructResultPagePresenter: function() {
        resultFilterTextArea = document.getElementById('result-filter-area');
    },

    showResult: function(resultString) {
        resultFilterTextArea.value = resultString;
    }
}