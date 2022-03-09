var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 500, 39.9671), 0, -45);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");
layer.isAnimation = true;

var points = [];

var objCyl1 = layer.addCylinder(new Drawsee.Vector3(116.1736 - 0.001, 50, 39.9671 + 0.0005), 20, 0, 40);
objCyl1.material.texture = "./images/horiAlarm.png";
objCyl1.material.uvScaling = new Drawsee.Vector2(4.0, 4.0);
objCyl1.onBeforeRender.add(function (obj) {
    var second = Drawsee.SystemTime.Now() * 0.001;
    objCyl1.material.uvOffset.x = -second * 0.3;
}
)

// fence
points = [];
points.push(new Drawsee.Vector3(0, 0, 0))
points.push(new Drawsee.Vector3(0, 0, 50))
points.push(new Drawsee.Vector3(50, 0, 60))
points.push(new Drawsee.Vector3(70, 0, 0))

points = Drawsee.Math3.Spline(points, 32, true);
var objPolyBox = layer.addPolyBoxAt(new Drawsee.Vector3(116.1736, 50, 39.9671 + 0.0002), points, 50);
objPolyBox.material.texture = "./images/vertAlarm.png";
objPolyBox.material.isCullBackFace = false;
var ratio = Drawsee.Math3.Length(points) / 50;
objPolyBox.material.uvScaling = new Drawsee.Vector2(ratio, 2.0);
objPolyBox.onBeforeRender.add(function (obj) {
    var second = Drawsee.SystemTime.Now() * 0.001;
    objPolyBox.material.uvOffset.y = second * 0.3;
}
)

// pipe flow
points = [];
points.push(new Drawsee.Vector3(-100, 30, 0))
points.push(new Drawsee.Vector3(0, 30, 10))
points.push(new Drawsee.Vector3(100, 0, 20))

var pipe0 = layer.addPipelineAt(new Drawsee.Vector3(116.1736, 50, 39.9671 - 0.001), points, 10);
pipe0.color = Drawsee.Color.Gray;

var pipeFlow = layer.addPipelineAt(new Drawsee.Vector3(116.1736, 50, 39.9671 - 0.001), points, 10.2);
pipeFlow.material.texture = "./images/arrow.png";
pipeFlow.material.alpha = 0.7;

pipeFlow.onBeforeRender.add(function (obj) {
    var second = Drawsee.SystemTime.Now() * 0.001;
    pipeFlow.material.uvOffset.y = -second * 0.5;
}
)
