var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 2000, 39.9671), 0, -60);

// 允许鼠标指取选择，否则鼠标左键单击选择
earthViewer.isEnableMouseOverPick = true;

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");

layer.isPickable = true; // 打开isPickable开关
layer.highlightMaterial.color = Drawsee.Color.Red; // 可以修改高亮颜色

// Mesh对象的缺省选中反馈是显示为高亮色
var objBall = layer.addBall(new Drawsee.Vector3(116.1736, 50, 39.9671), new Drawsee.Size3(100));
// 图片对象的缺省选中反馈是图片放大
var obj2 = layer.addImage(new Drawsee.Vector3(116.1736, 200, 39.9671), "./images/pin.png");

// 不可选的对比图层
var layer2 = new Drawsee.ShapeLayer(earthViewer, "layer2");
layer2.addBox(new Drawsee.Vector3(116.1736, 50, 39.9671 - 0.002), new Drawsee.Size3(100)).anno = "不可选";

// 点击选中物体的一对消息，参数类型 Drawsee.GeoObject3PickEventArgs
// e.geoObject为选中或者失去焦点的对象; e.layerName 对象所在图层; e.position 选中点位置
var clickCount = 0;
earthViewer.onClickObject.add(function (e) { clickCount++; console.log("click" + clickCount); })
earthViewer.onUnclickObject.add(function (e) { console.log("unclick" + clickCount); })

// 鼠标移入、移出选中物体的一对消息，参数类型 Drawsee.GeoObject3PickEventArgs
var enterCount = 0;
earthViewer.onEnterObject.add(function (e) { enterCount++; console.log("enter" + enterCount); })
earthViewer.onLeaveObject.add(function (e) { console.log("leave" + enterCount); })