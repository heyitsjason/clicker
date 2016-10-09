function initInvest() {
    var container = document.getElementById('invest'),
        investments = constants.invest.investments;

    investments.forEach(function(investment) {
        var newElement = _createInvestment(investment);

        container.appendChild(newElement);
    });
};

function updateInvest() {

};

function _createInvestment(investment) {
    var element = document.createElement('div'),
        button = document.createElement('button');

    button.innerHTML = investment.display;
    element.appendChild(button);

    return element;
};