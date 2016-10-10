function navigate(route) {
    window.location.hash = "#" + route;
}

function route(event, override, callback) {
    var fallback = '#' + constants.defaultFragment,
        fragment =  override || window.location.hash;

    routes[fragment] ?  routes[fragment](callback) :
                        routes[fallback](callback);
};

var routes = {
    '#home': function(callback) {
        console.log('route home');
        loadRegion('src/content/home.html', state.regions.content, function() {
            initHome();
            callback && callback();
        });
    },
    '#work': function(callback) {
        console.log('route work');
        loadRegion('src/content/work.html', state.regions.content, function() {
            initWork();
            callback && callback();
        });
    },
    '#invest': function(callback) {
        console.log('route invest');
        loadRegion('src/content/invest.html', state.regions.content, function() {
            initInvest();
            callback && callback();
        });
    },
    '#goals': function(callback) {
        console.log('route goals');
        loadRegion('src/content/goals.html', state.regions.content, function() {
            initGoals();
            callback && callback();
        });
    }
}