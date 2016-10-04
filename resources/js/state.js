var state = {
    dollars: 0,
    dps: 1,
};

function initState() {
    state.regions || (state.regions = {});

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

    navigate('home');
}

function run() {
    state.dollars += state.dps;

    updateHeader();
    updateWork();
    updateInvest();
    updateGoals();

    setTimeout(run, 1000);
}