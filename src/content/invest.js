function initInvest() {
    var container = document.getElementById('invest'),
        investments = constants.invest.investments;

    for(var investmentId in investments) {
        console.log('initInvest ' + investmentId);
        var newElement = _createInvestment(investments[investmentId]);

        container.appendChild(newElement);
    }

    // Setup modal
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        _closeModal();
    }

    window.onclick = function(event) {
        var modal = document.getElementById('invest-modal');
        if (event.target == modal) {
            _closeModal();
        }
    };
};

function updateInvest() {
    var investments = constants.invest.investments;

    for(var investmentId in investments) {
        var investment = investments[investmentId],
            element = document.getElementById(investment.id);

        if (element && _isUnlocked(investment)) {
            element.disabled = false;
            element.innerHTML = _getDisplay(investment);
        }
    }
};

function _createInvestment(investment) {
    var element = document.createElement('div'),
        button = document.createElement('button'),
        unlocked = _isUnlocked(investment);

    button.innerHTML = unlocked ?
        _getDisplay(investment) : constants.lockedDisplay;

    button.className = "investment-button";
    button.disabled = !unlocked;
    button.id = investment.id;

    button.onclick = function() {
        _investmentButtonCallback(investment);
    };

    element.appendChild(button);

    return element;
};

function _getDisplay(investment) {
    return investment.display + _getLevelDisplay(investment);
};

function _getLevelDisplay(investment) {
    var lvlDisplay = '';

    if (state.investments[investment.id]) {
        lvlDisplay = ' (Level ' + state.investments[investment.id].lvl + ')';
    }

    return lvlDisplay;
};

function _investmentButtonCallback(investment) {
    var modal = document.getElementById('invest-modal');

    modal.style.display = "block";

    _createInvestmentModalContent(investment);
};

function _createInvestmentModalContent(investment) {
    var title = document.getElementById('invest-modal-title'),
        content = document.getElementById('invest-modal-content');

    // Clear content
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    // Fill title
    title.innerHTML = investment.display;

    // Fill content
    if(_isActive(investment)) {
        // Create level up button
        var levelUpButton = document.createElement('button'),
            cost =  Math.round( investment.base *
                                Math.pow(   investment.baseMultiplier,
                                            state.investments[investment.id].lvl));

        levelUpButton.className = 'modal-content-button';
        levelUpButton.innerHTML = 'Level Up (Cost: ' + cost + ')';

        levelUpButton.onclick = function() {
            _levelUpButtonClick(investment, cost);
        }

        content.appendChild(levelUpButton);
    } else {
        // Create activate button
        var activateButton = document.createElement('button');
        activateButton.className = 'modal-content-button';
        activateButton.innerHTML = 'Activate (Cost: ' + investment.unlock + ')';

        activateButton.onclick = function() {
            _activateButtonClick(investment);
        }

        content.appendChild(activateButton);
    }
};

function _levelUpButtonClick(investment, cost) {
    if (state.points >= cost) {
        state.points -= cost;
        state.investments[investment.id].lvl += 1;

        _closeModal();
    }
};

function _activateButtonClick(investment) {
    if (state.points >= investment.base) {
        state.points -= investment.base;
        state.investments[investment.id] = _createInvestmentRecord(investment);

        _closeModal();
    }
};

function _createInvestmentRecord(investment) {
    return {
        lvl: 1,
        upgrades: {}
    };
};

function _isUnlocked(investment) {
    return  _isActive(investment) ||
            state.points >= investment.unlock;
};

function _isActive(investment) {
    return  state.investments[investment.id];
};

function _closeModal() {
    var modal = document.getElementById('invest-modal');

    modal.style.display = "none";
};