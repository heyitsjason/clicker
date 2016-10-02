const DEFAULT_FRAGMENT = '#home';

window.onhashchange = route;

function route() {
    var fragment = window.location.hash || DEFAULT_FRAGMENT;

    routes[fragment] ? routes[fragment]() : routes[DEFAULT_FRAGMENT]();
};

var routes = {
    '#home': function() {
        state.regions.header.innerHTML = 'header';
        // state.regions.content.innerHTML = 'content';
        state.regions.footer.innerHTML = 'footer';

        ajax.get('resources/test.html', function(response) {
            state.regions.content.innerHTML = response;
        });
    },
    '#home2': function() {
        state.regions.header.innerHTML = 'header';
        // state.regions.content.innerHTML = 'content';
        state.regions.footer.innerHTML = 'footer';

        ajax.get('resources/test2.html', function(response) {
            state.regions.content.innerHTML = response;
        });
    }
}