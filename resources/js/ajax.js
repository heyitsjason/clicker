var ajax = {
    get: function (uri, callback) {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback && callback(this.responseText);
            }
        };

        xhttp.open("GET", uri, true);
        xhttp.send();
    }
};