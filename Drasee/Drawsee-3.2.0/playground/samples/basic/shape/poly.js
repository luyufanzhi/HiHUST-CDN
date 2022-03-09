var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 5000, 39.9671), 0, -30);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");

var points = [];

points.push(new Drawsee.Vector3(116.1736 - 0.01, 1000, 39.9671 - 0.01));
points.push(new Drawsee.Vector3(116.1736 - 0.01, 1000, 39.9671 + 0.01));
points.push(new Drawsee.Vector3(116.1736 + 0.01, 1000, 39.9671 + 0.01));
points.push(new Drawsee.Vector3(116.1736 + 0.01, 1000, 39.9671));

var poly = layer.addPoly(points, null);
poly.material.texture = "./images/grass.jpg";

// 带洞多边形
var points2 = [];
points2.push(new Drawsee.Vector3(0, 0, 0));
points2.push(new Drawsee.Vector3(0, 0, 1000));
points2.push(new Drawsee.Vector3(1000, 0, 1000));
points2.push(new Drawsee.Vector3(1000, 0, 0));

var holes = [];
var hole = [];

hole.push(new Drawsee.Vector3(300, 0, 300));
hole.push(new Drawsee.Vector3(300, 0, 600));
hole.push(new Drawsee.Vector3(600, 0, 600));
holes.push(hole);

var poly2 = layer.addPolyAt(new Drawsee.Vector3(116.1736 - 0.01, 1000, 39.9671 - 0.01), points2, holes);
poly2.color = new Drawsee.Color(1, 0.5, 0, 0.7);
poly2.isClampToGround = true;
poly2.anno = "贴地"
