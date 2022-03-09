var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 8000, 39.9671), 0, -25);

// 可以在earthViewer的消息上添加处理函数, 参数为 Drawsee.MouseButtonEventArgs
// e.point 屏幕坐标, earthViewer.mouseScreenPosition 屏幕坐标
// earthViewer.mousePosition 地球坐标, 常用于获取当前鼠标的指取位置

earthViewer.onMouseLeftButtonDoubleClick.add(function (e) {
    alert(earthViewer.mousePosition);
    //alert(earthViewer.mouseScreenPosition);
})

earthViewer.onMouseLeftButtonDown.add(function (e) {
    console.log("left mouse down" + e.point);
})

earthViewer.onMouseLeftButtonUp.add(function (e) {
    console.log("left mouse up" + e.point);
})

earthViewer.onMouseMove.add(function (e) {
    //console.log(e.point);
})

// 也可以直接通过earthViewer.htmlUI对象访问到Dom中的Html元素，添加javascript原生消息
earthViewer.htmlUI.addEventListener("click", function () {
    console.log("js click");
});
