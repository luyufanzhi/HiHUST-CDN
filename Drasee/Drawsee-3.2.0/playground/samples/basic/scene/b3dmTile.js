var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();

// url指向数据根节点的json文件
var tileLayer = new Drawsee.B3dmTileLayer(earthViewer, "b3dmLayer", "/demodata/b3dm/jiyi/tileset.json");

// 缩放到图层范围
earthViewer.camera.zoomToLayer(tileLayer);

