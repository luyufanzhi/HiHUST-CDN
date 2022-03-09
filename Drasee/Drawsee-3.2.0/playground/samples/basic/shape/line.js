var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 5000, 39.9671), 0, -30);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");

var points = [];
points.push(new Drawsee.Vector3(116.1736 - 0.015, 1000, 39.9671));
points.push(new Drawsee.Vector3(116.1736 + 0.015, 500, 39.9671));

var line = layer.addLine(points);
line.anno = "设定高度"

// 可以指定宽度、贴地和其他显示属性
var line2 = layer.addLine(points, 2);
line2.isClampToGround = true;
line2.anno = "贴地线"
line2.color = Drawsee.Color.Yellow;

var line3 = layer.addLine(points, 2);
line3.isClampToGround = true;
line3.anno = "贴地线100米"
line3.groundHeight = 100;
line3.color = Drawsee.Color.Blue;

points = [];
points.push(new Drawsee.Vector3(0, 0, 0));
points.push(new Drawsee.Vector3(1000, 0, 0));
points.push(new Drawsee.Vector3(1000, 500, 0));
points.push(new Drawsee.Vector3(1500, 500, 0));

layer.addLineAt(new Drawsee.Vector3(116.1736 - 0.01, 500, 39.9671 - 0.015), points);

// layer.addXXXAt 调用格式，均指使用一个基准点和局部坐标的方式添加图形