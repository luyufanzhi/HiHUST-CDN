var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 5000, 39.9671), 45, -25);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");

// 使用经纬度
var points = [];
points.push(new Drawsee.Vector3(116.1736 - 0.005, 500, 39.9671 - 0.008));
points.push(new Drawsee.Vector3(116.1736 + 0.01, 500, 39.9671 - 0.008));

var objArrow0 = layer.addArrow(points, 50, 50, 10, 30);
objArrow0.color = Drawsee.Color.Yellow;

// 使用相对坐标
points = [];
points.push(new Drawsee.Vector3(0, 0, 0));
points.push(new Drawsee.Vector3(1000, -100, 100));

var objArrow = layer.addArrowAt(new Drawsee.Vector3(116.1736, 500, 39.9671), points, 200, 50, 10, 30);
objArrow.color = Drawsee.Color.Red;
objArrow.anno = "前进方向";

points = [];
points.push(new Drawsee.Vector3(0, 0, 0));
points.push(new Drawsee.Vector3(300, 0, -100));
points.push(new Drawsee.Vector3(600, 0, 200));
points.push(new Drawsee.Vector3(1000, 0, 0));

var objArrow2 = layer.addArrowAt(new Drawsee.Vector3(116.1736, 500, 39.9671 - 0.003), points, 30, 300, 0, 80);

var objArrow3 = layer.addArrowAt(new Drawsee.Vector3(116.1736, 500, 39.9671 - 0.005), points, 30, 300);
objArrow3.isClampToGround = true;
objArrow3.color = new Drawsee.Color(1, 0.5, 0, 0.8);
objArrow3.anno = "贴地箭头"
