function loadRegion(uri, region, callback) {
    if (cache[uri]) {
        _loadData(cache[uri], region, callback);
    } else {
        ajax.get(uri, function(response) {
            cache[uri] = response;
            _loadData(cache[uri], region, callback);
        });
    }
};

function _loadData(data, region, callback) {
    region.innerHTML = data;
    callback && callback();
}