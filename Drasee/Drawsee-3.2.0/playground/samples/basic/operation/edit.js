document.getElementById("toolbarDiv").innerHTML = ' \
<input type="button" value="加点" onclick="earthViewer.setCurrentTool(Drawsee.EarthToolType.TrackPoint);" /> \
<input type="button" value="加线" onclick="earthViewer.setCurrentTool(Drawsee.EarthToolType.TrackLine);" /> \
<input type="button" value="加面" onclick="earthViewer.setCurrentTool(Drawsee.EarthToolType.TrackPoly);" /> \
<input type="button" value="清空" onclick="layer.clear();" />';

// 操作都是鼠标双击结束

var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 8000, 39.9671), 0, -25);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");

// 参数类型为 Drawsee.EarthViewerTrackEventArgs
// e.geoType:跟踪的空间类型； e.points:鼠标点击数组；
// e.linePoints：地表跟踪线； e.areaPoints: 地表跟踪三角网，通常用于面积计算
earthViewer.onTrackFinish.add(function (e) {
    var obj;

    if (e.geoType === Drawsee.GeoType.Point) {
        layer.addImage(e.points[0], "./images/pin.png");

    } else if (e.geoType === Drawsee.GeoType.LineString) {
        layer.addLine(e.linePoints, 2);
    } else if (e.geoType === Drawsee.GeoType.Polygon) {
        obj = layer.addPoly(e.points);
        obj.isClampToGround = true;

        // Drawsee.EarthMath3 使用地球坐标计算， 而Drawsee.Math3使用直角坐标计算
        var area = Drawsee.EarthMath3.Area(e.areaPoints);
        alert("面积：" + area);
    }

    // 添加对象之后清除屏幕跟踪结果
    earthViewer.clearTrackerResult();
}
);