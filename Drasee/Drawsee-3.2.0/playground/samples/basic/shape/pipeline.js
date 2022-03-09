var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 300, 39.9671), -40, -40);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");

var points = [];
points.push(new Drawsee.Vector3(-50, 0, 0))
points.push(new Drawsee.Vector3(0, 0, 10))
points.push(new Drawsee.Vector3(50, 30, 20))

// 可以添加圆形，方形或者自定义形状的管线
layer.addPipelineAt(new Drawsee.Vector3(116.1736, 50, 39.9671 - 0.0006), points, 4).color = Drawsee.Color.Yellow;
layer.addPipelineAt(new Drawsee.Vector3(116.1736, 50, 39.9671 - 0.0003), points, new Drawsee.Size(10, 15), false);
layer.addPipelineAt(new Drawsee.Vector3(116.1736, 50, 39.9671), points, calcStarShape(5, 5, 3)).color = Drawsee.Color.Red;;

function calcStarShape(count, outerRadius, innerRadius) {
    var angle = Math.PI / count;
    var length = 2 * count;
    var positions = new Array(length);
    for (var i = 0; i < length; i++) {
        var r = i % 2 === 0 ? outerRadius : innerRadius;
        positions[i] = new Drawsee.Vector2(
            Math.cos(i * angle) * r,
            Math.sin(i * angle) * r
        );
    }
    return positions;
}

// 管线没有支持贴地