const plus = document.querySelector('.icon-plus');
const minus = document.querySelector('.icon-minus');

function zoomin() {
    let myImg = document.getElementById("map");
    let currWidth = myImg.clientWidth;
    if (currWidth === 2500) return false;
    else {
        myImg.style.width = (currWidth + 100) + "px";
    }
}

function zoomout() {
    let myImg = document.getElementById("map");
    let currWidth = myImg.clientWidth;
    if (currWidth === 100) return false;
    else {
        myImg.style.width = (currWidth - 100) + "px";
    }
}
plus.addEventListener('click',zoomin);
minus.addEventListener('click',zoomout);

const map = document.getElementById('map');

map.onmousedown = function(e) {

    var coords = getCoords(map);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    map.style.position = 'absolute';
    //document.body.appendChild(map);
    moveAt(e);

    map.style.zIndex = 9; // над другими элементами

    function moveAt(e) {
        map.style.left = e.pageX - shiftX + 'px';
        map.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    map.onmouseup = function() {
        document.onmousemove = null;
        map.onmouseup = null;
    };

}

map.ondragstart = function() {
    return false;
};

function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
