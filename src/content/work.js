function initWork() {

    var container = document.getElementsByClassName('work-image-container')[0];

    container.appendChild(_getNextWorkImage());
    container.appendChild(_getNextWorkImage());

    // console.log('test ' + test.children[0].id);

// <img id="work-image-a" class="work-image" src="resources/images/test.png" alt="test alt">
// <img id="work-image-b" class="work-image" src="resources/images/test.png" alt="test alt">


    _scrollWork();
};

function _getNextWorkImage() {
    return _createWorkImage(workImages[0]);
}


var imageCount = 1;
function _createWorkImage(imageFile) {
    var imageElement = document.createElement('img');

    imageElement.className = "work-image";
    imageElement.src = "resources/images/" + imageFile;
    imageElement.id = "work-image-" + imageCount;
    imageCount++;

    return imageElement;
}


function updateWork() {

};

var workImages = ['test.png','test.png'];

var left = 0;
function _scrollWork() {
    var container = document.getElementsByClassName('work-image-container')[0],
        firstChild = container.children[0],
        firstChildWidth = firstChild.clientWidth;

    // console.log(firstChildWidth);

    // for (var i = 0; i < container.children.length; i++) {
    //     var imageElement = container.children[i];
    //     imageElement.style.left = left + 'px';
    //     left -= 1;
    // }
    // console.log(firstChildWidth);
    if (left*-1 >= firstChildWidth) {
        console.log('reached');
        container.removeChild(firstChild);
        left = 0;
        container.appendChild(_getNextWorkImage());
    } else {
        container.style.left = left + 'px';
        left -= 1;
    }

    setTimeout(_scrollWork, 10);
}