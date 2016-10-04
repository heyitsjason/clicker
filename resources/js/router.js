const DEFAULT_FRAGMENT = '#home';

window.onhashchange = route;

function navigate(route) {
    window.location.hash = "#" + route;
}

function route() {
    var fragment = window.location.hash || DEFAULT_FRAGMENT;

    routes[fragment] ? routes[fragment]() : routes[DEFAULT_FRAGMENT]();
};

var routes = {
    '#home': function() {
        state.regions.content.innerHTML = 'Home';
    },
    '#work': function() {
        loadRegion('src/content/work.html', state.regions.content, function() {
            initWork();
        });
    },
    '#invest': function() {
        loadRegion('src/content/invest.html', state.regions.content, function() {
            initInvest();
        });
    },
    '#goals': function() {
        loadRegion('src/content/goals.html', state.regions.content, function() {
            initGoals();
        });
    }
}