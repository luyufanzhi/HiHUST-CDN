var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 3000, 39.9671), 0, -30);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");

var points = [];
points.push(new Drawsee.Vector3(-300, 100, 200));
points.push(new Drawsee.Vector3(300, 100, 300));
points.push(new Drawsee.Vector3(600, 100, 100));
points.push(new Drawsee.Vector3(800, 100, -100));

var objWall = layer.addWallAt(new Drawsee.Vector3(116.1736, 300, 39.9671 - 0.005), points, 50, 20, true);
objWall.color = Drawsee.Color.Yellow;
objWall.anno = "指定高度";

var objWall2 = layer.addWallAt(new Drawsee.Vector3(116.1736 - 0.005, 200, 39.9671 - 0.008), points, 50, 20, true);
objWall2.color = Drawsee.Color.Orange;
objWall2.anno = "贴地围墙";
objWall2.isClampToGround = true;
