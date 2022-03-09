var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 1500, 39.9671), 0, -50);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");

var obj0 = layer.addPlane(new Drawsee.Vector3(116.1736, 100, 39.9671), 200, 200);
obj0.material.texture = "./images/star.png";
obj0.material.uvOffset = new Drawsee.Vector2(0.5, 0);

var obj1 = layer.addPlane(new Drawsee.Vector3(116.1736, 100, 39.9671 - 0.002), 200, 200);
obj1.material.texture = "./images/star.png";
obj1.material.uvScaling = new Drawsee.Vector2(5, 5);



