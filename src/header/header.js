function initHeader() {

};

function updateHeader(pointsPerSecond) {
    document.getElementById('points-total').innerHTML =
        Math.round(state.points) + ' ' + constants.pointsLabel;

    document.getElementById('points-rate').innerHTML =
        Math.round(pointsPerSecond) + ' ' + constants.pointsPerSecondLabel;
};