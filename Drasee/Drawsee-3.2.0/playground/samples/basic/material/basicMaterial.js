var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 1500, 39.9671), 0, -10);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");

// GeoObject3.material 缺省创建的是BasicMaterial
var obj0 = layer.addBall(new Drawsee.Vector3(116.1736 - 0.004, 100, 39.9671), new Drawsee.Size3(100));
obj0.material.color = Drawsee.Color.Red;

var obj1 = layer.addBall(new Drawsee.Vector3(116.1736 - 0.002, 100, 39.9671), new Drawsee.Size3(100));
obj1.material.color = Drawsee.Color.Red;
obj1.material.isUseLight = false;

var obj2 = layer.addBall(new Drawsee.Vector3(116.1736, 100, 39.9671), new Drawsee.Size3(100));
obj2.material.color = new Drawsee.Color(1.0, 0, 1.0, 0.5);

var obj3 = layer.addBall(new Drawsee.Vector3(116.1736 + 0.002, 100, 39.9671), new Drawsee.Size3(100));
obj3.material.texture = "./images/grass.jpg";

var obj4 = layer.addBall(new Drawsee.Vector3(116.1736 + 0.004, 100, 39.9671), new Drawsee.Size3(100));
obj4.material.texture = "./images/star.png";
obj4.material.isCullBackFace = false;


