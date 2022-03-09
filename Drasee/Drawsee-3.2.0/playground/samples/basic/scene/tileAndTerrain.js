var earthViewer = new Drawsee.EarthViewer("mapDiv");

// open 函数返回的是Promise，可以在回调函数中打开倾斜摄影等局部数据
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/")).then(function () {
    openTileLayer();
});

function openTileLayer() {
    // 通过offsetMeters参数，可以微调倾斜摄影的位置，尤其是高度
    var tileLayer = new Drawsee.B3dmTileLayer(earthViewer, "b3dmLayer",
        "/demodata/b3dm/zhouqu-small/tileset.json", new Drawsee.Vector3(0, 50, 0));

    // zIndex大的图层会完全覆盖小的，数值相同则遵照ZBuffer规则，缺省值是0。此处设置使倾斜摄影完全覆盖地形
    tileLayer.zIndex = 1;

    earthViewer.camera.zoomToLayer(tileLayer);;
}

