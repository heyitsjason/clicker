function initHeader() {

};

function updateHeader() {
    document.getElementById('points-total').innerHTML =
        state.points + ' ' + constants.pointsLabel;

    document.getElementById('points-rate').innerHTML =
        state.pointsPerSecond + ' ' + constants.pointsPerSecondLabel;
};