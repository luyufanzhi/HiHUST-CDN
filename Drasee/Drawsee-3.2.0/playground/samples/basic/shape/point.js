var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 5000, 39.9671), 0, -30);

// 图形通过图层来组织，图层名称不能重复。 通过earthViewer.layers可以访问到各个图层
var layer = new Drawsee.ShapeLayer(earthViewer, "layer");

// 可以控制图层总体显示距离
layer.maxVisibleDistance = 10000;

var obj = layer.addImage(new Drawsee.Vector3(116.1736, 0, 39.9671), "./images/pin.png");
obj.isClampToGround = true;
obj.groundHeight = 30;
obj.anno = "离地30米";

var obj2 = layer.addImage(new Drawsee.Vector3(116.1736, 1000, 39.9671), "./images/pin.png");
obj2.anno = "绝对高度1000米"
// 图形的标注可以单独控制显示距离
obj2.maxAnnoVisibleDistance = 5000;

var obj3 = layer.addImage(new Drawsee.Vector3(116.1736, 700, 39.9671), "./images/pin.png");
obj3.anno = "远了近了看不见"
obj3.maxVisibleDistance = 5000;
obj3.minVisibleDistance = 1500;

// 图片对象可以指定大小
var obj3 = layer.addImage(new Drawsee.Vector3(116.1736 + 0.01, 700, 39.9671), "./images/pin.png", new Drawsee.Vector2(64, 64));
obj3.anno = "放大了"

var obj4 = layer.addImage(new Drawsee.Vector3(116.1736 + 0.01, 1100, 39.9671), "./images/pin.png", new Drawsee.Vector2(8, 8));
obj4.anno = "缩小了"
