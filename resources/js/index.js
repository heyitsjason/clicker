function run() {
    var headerRegion = document.getElementsByClassName('header-region')[0],
        contentRegion = document.getElementsByClassName('content-region')[0],
        footerRegion = document.getElementsByClassName('footer-region')[0];

    var div = document.createElement('div');
    div.className = 'large-text';
    div.innerHTML = 'test';

    contentRegion.appendChild(div);
}