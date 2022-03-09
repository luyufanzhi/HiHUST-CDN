var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 1000, 39.9671), 0, -30);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");
layer.isAnimation = true;

var points = [];

for (var i = 0; i < 50; i++)
    points.push(new Drawsee.Vector3(116.1736 - 0.002 + 0.0001 * i, 50, 39.9671));


var line = layer.addLine(points, 4);
line.color = Drawsee.Color.Red;

line.onBeforeRender.add(function (obj) {
    var second = Drawsee.SystemTime.Now() * 0.001;
    for (var i = 0; i < 50; i++) {
        points[i].y = 50 + 50 * Math.sin(second * 2 + i * 0.2);
    }
    line.points = points;

    line.color = new Drawsee.Color(Math.cos(second) * 0.3 + 0.8, 0, 1, 1);
}
)
