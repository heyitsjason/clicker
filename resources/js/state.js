var state = {
    points: constants.initialPoints,
    pointsPerSecond: constants.initialPointsPerSecond,
    cache: {},
    regions: {}
};

function initState() {
    state.regions.header = document.getElementById('header');
    state.regions.content = document.getElementById('content');
    state.regions.footer = document.getElementById('footer');

    loadRegion('src/header/header.html', state.regions.header, function() {
        initHeader();
        run();
    });

    loadRegion('src/footer/footer.html', state.regions.footer, function() {
        initFooter();
    });

    route(null, constants.defaultFragment, function() {
        navigate(constants.defaultFragment);
        window.onhashchange = route;
    });
}

function run() {
    state.points += state.pointsPerSecond;

    updateHeader();
    updateWork();
    updateInvest();
    updateGoals();

    setTimeout(run, 1000);
}

function loadRegion(uri, region, callback) {
    if (state.cache[uri]) {
        _loadData(state.cache[uri], region, callback);
    } else {
        ajax.get(uri, function(response) {
            state.cache[uri] = response;
            _loadData(state.cache[uri], region, callback);
        });
    }
};

function _loadData(data, region, callback) {
    region.innerHTML = data;
    callback && callback();
}