document.getElementById("toolbarDiv").innerHTML = ' \
<input type="button" value="Bing" onclick="openBing()" /> \
<input type="button" value="OpenStreetMap" onclick="openOpenStreet()" /> \
<input type="button" value="ArcGis" onclick="openArcGis()" /> \
<input type="button" value="高德" onclick="openGaoDe()" /> \
<input type="button" value="百度" onclick="openBaiDu()" /> \
<input type="button" value="天地图" onclick="openTianDiTu()" /> ';

var earthViewer = new Drawsee.EarthViewer("mapDiv");
openBing();

function openBing() {
    earthViewer.open(new Drawsee.BingImageProvider(Drawsee.BingImageStyle.ArialWithLablels));
}

function openOpenStreet() {
    earthViewer.open(new Drawsee.OpenStreetMapImageProvider());
}

function openArcGis() {
    earthViewer.open(new Drawsee.ArcGisImageProvider());
}

function openGaoDe() {
    earthViewer.open(new Drawsee.GaoDeImageProvider(Drawsee.GaoDeImageStyle.Map));
}

function openBaiDu() {
    earthViewer.open(new Drawsee.BaiDuImageProvider());
}

function openTianDiTu() {
    earthViewer.open(new Drawsee.TianDiTuImageProvider(Drawsee.TianDiTuImageStyle.Terrain, ""));
}

// 最常用的在线瓦片可以指定类型或者使用缺省类型直接创建Provider

// 天地图必须使用自己申请的token
