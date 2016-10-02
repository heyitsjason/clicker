function run() {
    state.regions || (state.regions = {});

    state.regions.header = document.getElementsByClassName('header-region')[0];
    state.regions.content = document.getElementsByClassName('content-region')[0];
    state.regions.footer = document.getElementsByClassName('footer-region')[0];

    route();
}