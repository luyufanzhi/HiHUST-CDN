document.getElementById("toolbarDiv").innerHTML = ' \
<input type="button" value="定位北京" onclick="toBeijing()" /> \
<input type="button" value="飞向上海" onclick="flyToShanghai()" /> \
<input type="button" value="限制范围" onclick="setNavigateRange()" /> \
<input type="button" value="取消限制" onclick="clearNavigateRange()" />';

var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();

function toBeijing() {
    earthViewer.camera.setView(new Drawsee.Vector3(116.40, 100000, 39.92), 0, -60);
}

function flyToShanghai() {
    earthViewer.camera.flyTo(new Drawsee.Vector3(121.50, 50000, 31.2), 0, -30);
}

function setNavigateRange() {
    earthViewer.camera.setNavigateRange(earthViewer.camera.center, 50000);
}

function clearNavigateRange() {
    earthViewer.camera.clearNavigateRange();
}