var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 300, 39.9671), 0, -60);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");
layer.isPickable = true;

var obj = layer.addModel(new Drawsee.Vector3(116.1736, 350, 39.9671), "./data/model/xz/小油罐.xz");

var obj2 = layer.addModel(new Drawsee.Vector3(116.1736, 0, 39.9671 - 0.0002), "./data/model/xz/消防栓.xz");
obj2.localTransform.scale(10, 10, 10);
obj2.isClampToGround = true;

// xz格式是obj模型文件通过Drawsee数据工具转换得到，对于静态模型比较合适。