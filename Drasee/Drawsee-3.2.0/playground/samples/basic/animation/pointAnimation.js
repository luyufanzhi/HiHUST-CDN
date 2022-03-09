var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 1000, 39.9671), 0, -30);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");
layer.isAnimation = true;

var objBox = layer.addBox(new Drawsee.Vector3(116.1736, 100, 39.9671), new Drawsee.Size3(50));
objBox.anno = "缩放";
objBox.color = Drawsee.Color.Yellow;

objBox.onBeforeRender.add(function (obj) {
    obj.localTransform.heading += 5;
    obj.localTransform.yScale = 5 * Math.abs(Math.sin(Drawsee.SystemTime.Now() * 0.001));
}
)

var objRot = layer.addArrowAt(new Drawsee.Vector3(116.1736, 100, 39.9671),
    [new Drawsee.Vector3(0, 0, 0), new Drawsee.Vector3(0, 0, 50)], 10, 20, 5);
objRot.color = Drawsee.Color.Red;

var coordSys = earthViewer.renderContext.coordSystem;
objRot.onBeforeRender.add(function (obj) {
    var time = Drawsee.SystemTime.Now() * 0.001;
    var radius = 200;
    var localPosition = new Drawsee.Vector3(radius * Math.cos(time), 0, radius * Math.sin(time));
    var earthPosition = coordSys.localToEarth(new Drawsee.Vector3(116.1736, 100, 39.9671), localPosition);

    time += 0.001;
    var nextLocalPosition = new Drawsee.Vector3(radius * Math.cos(time), 0, radius * Math.sin(time));
    var direction = nextLocalPosition.subtract(localPosition);

    obj.position = earthPosition;
    obj.localTransform.rotateBetweenVectors(new Drawsee.Vector3(0, 0, 1), direction);
}
)