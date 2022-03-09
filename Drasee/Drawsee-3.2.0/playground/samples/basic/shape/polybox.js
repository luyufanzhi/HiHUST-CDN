var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 5000, 39.9671), 0, -60);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");

var points = [];
points.push(new Drawsee.Vector3(0, 0, 200));
points.push(new Drawsee.Vector3(1000, -100, 300));
points.push(new Drawsee.Vector3(1000, -200, -100));

var objArrow = layer.addArrowAt(new Drawsee.Vector3(116.1736, 500, 39.9671), points, 30, 200, 10, 30);
objArrow.color = Drawsee.Color.Red;
objArrow.anno = "前进方向";

points = [];
points.push(new Drawsee.Vector3(-300, 100, 200));
points.push(new Drawsee.Vector3(300, 100, 300));
points.push(new Drawsee.Vector3(600, 100, 100));
points.push(new Drawsee.Vector3(800, 100, -100));

var objWall = layer.addWallAt(new Drawsee.Vector3(116.1736, 200, 39.9671 - 0.005), points, 50, 20, true);
objWall.color = Drawsee.Color.Yellow;
objWall.anno = "指定高度";


var objWall2 = layer.addWallAt(new Drawsee.Vector3(116.1736 - 0.005, 200, 39.9671 - 0.008), points, 50, 20, true);
objWall2.color = Drawsee.Color.Orange;
objWall2.anno = "贴地围墙";
objWall2.isClampToGround = true;
