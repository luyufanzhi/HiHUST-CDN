document.getElementById("toolbarDiv").innerHTML = ' \
<input type="button" value="长度" onclick="earthViewer.setCurrentTool(Drawsee.EarthToolType.MeasureLength);" /> \
<input type="button" value="面积" onclick="earthViewer.setCurrentTool(Drawsee.EarthToolType.MeasureArea);" /> \
<input type="button" value="清除" onclick="earthViewer.clearTrackerResult();" />';

var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 8000, 39.9671), 0, -25);

