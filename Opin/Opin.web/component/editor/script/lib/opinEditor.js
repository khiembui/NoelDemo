(function () {
    var canvas = new fabric.Canvas('c');

    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 200,
        height: 200,
        angle: 0,
        borderColor: 'gray',
        cornerColor: 'gray',
        cornerSize: 10,
        transparentCorners: false
    });
    canvas.hoverCursor = 'pointer';
    canvas.add(rect);
})();