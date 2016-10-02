const DEFAULT_FRAGMENT = '#home';

window.onhashchange = route;

function navigate(route) {
    window.location.hash = "#" + route;
}

function route() {
    var fragment = window.location.hash || DEFAULT_FRAGMENT;

    routes[fragment] ? routes[fragment]() : routes[DEFAULT_FRAGMENT]();
};

function loadRegion(uri, region, callback) {
    ajax.get(uri, function(response) {
        region.innerHTML = response;
        callback && callback();
    });
};

var routes = {
    '#home': function() {
        state.regions.content.innerHTML = 'Home';
    },
    '#train': function() {
        state.regions.content.innerHTML = 'Train';
    },
    '#defend': function() {
        state.regions.content.innerHTML = 'Defend';
    },
    '#stats': function() {
        state.regions.content.innerHTML = 'Stats';
    },
    '#login': function() {
        state.regions.content.innerHTML = 'Login';
    }
}