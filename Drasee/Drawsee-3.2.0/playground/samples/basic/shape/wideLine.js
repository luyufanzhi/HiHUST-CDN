var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 5000, 39.9671), 0, -60);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");
// 设置成动画模式，系统会连续重画
layer.isAnimation = true;

var points = [];
points.push(new Drawsee.Vector3(-1200, 0, 0));
points.push(new Drawsee.Vector3(1200, 0, 0));

//点画线
var line = layer.addLineAt(new Drawsee.Vector3(116.1736, 100, 39.9671), points, 4);
line.color = Drawsee.Color.Yellow;
line.lineProperty.dashLength = 0.02;

//带边线
var line2 = layer.addLineAt(new Drawsee.Vector3(116.1736, 100, 39.9671 + 0.002), points, 8);
line2.lineProperty.outlineWidth = 1;
line2.lineProperty.outlineColor = Drawsee.Color.Red;

//发光线
var line3 = layer.addLineAt(new Drawsee.Vector3(116.1736, 100, 39.9671 + 0.004), points, 8);
line3.lineProperty.glowRadius = 10;
line3.color = Drawsee.Color.Blue;
line3.lineProperty.glowColor = Drawsee.Color.Yellow;

//裁掉一半的发光线
var line31 = layer.addLineAt(new Drawsee.Vector3(116.1736, 100, 39.9671 + 0.006), points, 8);
line31.lineProperty.glowRadius = 10;
line31.color = Drawsee.Color.Blue;
line31.lineProperty.glowColor = Drawsee.Color.Yellow;
line31.lineProperty.clipLeft = true;

//动态轨迹线
points = [];
points.push(new Drawsee.Vector3(116.1736 - 0.015, 100, 39.9671 - 0.002));
points.push(new Drawsee.Vector3(116.1736, 300, 39.9671 - 0.002));
points.push(new Drawsee.Vector3(116.1736 + 0.015, 100, 39.9671 - 0.004));

points = Drawsee.Math3.Spline(points, 32);
var line4 = layer.addLine(points, 16);

// 可以组合设置多种显示属性
line4.color = new Drawsee.Color(1, 1, 0, 0.8);
line4.lineProperty.trailLength = 0.05;
line4.lineProperty.trailCount = 6;
line4.lineProperty.trailSpeed = 2.0;
line4.lineProperty.outlineColor = Drawsee.Color.Red;
line4.lineProperty.tapperPower = 0.8;

// 设置中的长度比例：dashLength，trailLength 都是相对于总长度的比例值

// 更多的设置选项组合请参看  Drawsee.WideLineProperty

// 目前版本还没有支持箭头线型