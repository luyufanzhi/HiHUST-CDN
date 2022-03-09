var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 5000, 39.9671), 0, -60);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");

var obj = layer.addImage(new Drawsee.Vector3(116.1736, 100, 39.9671), "./images/pin.png");
obj.anno = "左侧垂直居中";
obj.fontColor = Drawsee.Color.Red;
obj.annoHorizontalAlignment = Drawsee.HorizontalAlignment.Left;
obj.annoVerticalAlignment = Drawsee.VerticalAlignment.Center;

var obj2 = layer.addAnno(new Drawsee.Vector3(116.1736 + 0.01, 100, 39.9671), "半透明纯标注");
obj2.fontColor = Drawsee.Color.FromIntRgba(255, 255, 0, 128);
obj2.fontSize = 36;

var obj3 = layer.addImage(new Drawsee.Vector3(116.1736 + 0.01, 100, 39.9671 + 0.01), "./images/pin.png");
obj3.anno = "边框和背景";
obj3.fontSize = 20;
obj3.annoProperty.borderColor = new Drawsee.Color(1, 1, 0, 0.8);
obj3.annoProperty.roundRadius = 8;
obj3.annoProperty.backgroundColor = new Drawsee.Color(0, 0, 0, 0.5);
obj3.annoProperty.padding = 12;

var obj4 = layer.addImage(new Drawsee.Vector3(116.1736 + 0.01, 100, 39.9671 - 0.01), "./images/pin.png");
obj4.anno = "锚点";
obj4.annoProperty.isAnchor = true;

var points = [];
points.push(new Drawsee.Vector3(116.1736 - 0.015, 200, 39.9671));
points.push(new Drawsee.Vector3(116.1736 - 0.005, 100, 39.9671 - 0.005));
points.push(new Drawsee.Vector3(116.1736 + 0.015, 50, 39.9671));

var line = layer.addLine(points);
line.anno = "沿线标注";
line.fontSize = 28;
line.annoProperty.borderColor = new Drawsee.Color(1, 1, 0, 0.8);
line.color = Drawsee.Color.Yellow;

// 更多设置组合参考 Drawsee.RichTextProperty