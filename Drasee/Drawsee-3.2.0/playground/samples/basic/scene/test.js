var earthViewer = new Drawsee.EarthViewer("mapDiv");
var tileLayer;

// 可以在Promise回调函数中打开倾斜摄影数据
earthViewer.open().then(function () {
    var layer = new Drawsee.ShapeLayer(earthViewer, "layer");
    var obj = layer.addImage(new Drawsee.Vector3(116.616594639, 30, 34.726181971), "./images/pin.png");
    obj.anno = "离地30米";


    tileLayer = new Drawsee.B3dmTileLayer(earthViewer, "b3dmLayer", "/b3dm/jiyi/tileset.json");
    earthViewer.camera.zoomToLayer(tileLayer);

});
