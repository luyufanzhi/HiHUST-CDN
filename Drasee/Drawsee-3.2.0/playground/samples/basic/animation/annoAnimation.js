var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 5000, 39.9671), 0, -60);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");

// 基本形状Mesh，中心点对齐到指定位置， 可以指定贴地模式
var objBox = layer.addBox(new Drawsee.Vector3(116.1736 - 0.0015, 600, 39.9671), new Drawsee.Size3(50));
objBox.isClampToGround = true;
objBox.groundHeight = 25;

var objBall = layer.addBall(new Drawsee.Vector3(116.1736, 600, 39.9671), new Drawsee.Size3(100));
objBall.isClampToGround = true;
objBall.groundHeight = 50;

var objBall2 = layer.addBall(new Drawsee.Vector3(116.1736, 500, 39.9671 - 0.003), new Drawsee.Size3(200, 80, 80));

var objCyl = layer.addCylinder(new Drawsee.Vector3(116.1736 + 0.0015, 600, 39.9671), 200, 50, 50);

var objCyl1 = layer.addCylinder(new Drawsee.Vector3(116.1736 + 0.003, 600, 39.9671), 100, 0, 50);

var objPlane = layer.addPlane(new Drawsee.Vector3(116.1736, 400, 39.9671 - 0.003), 500, 400);
objPlane.color = new Drawsee.Color(1, 1, 0, 0.7);