var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 300, 39.9671), -40, -40);

// Babylon具备各种丰富的Materail类型，通过earthViewer.globalScene，就可以创建
var scene = earthViewer.globalScene;

// PBRMaterial,即Physically based rendering，能够实现接近物理真实效果的渲染
// 这里只是最基本的效果，更多复杂用法请参考Babylon官网资料
var plastic = new BABYLON.PBRMaterial("plastic", scene);
plastic.microSurface = 0.7;
plastic.albedoColor = new BABYLON.Color3(0.206, 0.94, 1);
plastic.reflectivityColor = new BABYLON.Color3(0.03, 0.03, 0.03);
plastic.backFaceCulling = false;

var copper = new BABYLON.PBRMaterial("", scene);
copper.albedoColor = new BABYLON.Color3(1.0, 0.5, 0.0);
copper.metallic = 0.5;
copper.roughness = 0.5;
copper.backFaceCulling = false;

var metal = new BABYLON.PBRMaterial("", scene);
metal.albedoColor = new BABYLON.Color3(0.3, 0.3, 0.3);
metal.metallic = 1.0;
metal.roughness = 0.7;
metal.backFaceCulling = false;

// 创建Drawsee三维物体
var layer = new Drawsee.ShapeLayer(earthViewer, "layer");

var points = [];
points.push(new Drawsee.Vector3(-50, 0, 0))
points.push(new Drawsee.Vector3(0, 0, 10))
points.push(new Drawsee.Vector3(50, 30, 20))

// Drawsee渲染流程融合了Babylon材质，对material属性直接赋值就获得新材质的效果
var obj0 = layer.addPipelineAt(new Drawsee.Vector3(116.1736, 50, 39.9671 - 0.0006), points, 4);
obj0.material = copper;
obj0.anno = "黄铜";

var obj1 = layer.addPipelineAt(new Drawsee.Vector3(116.1736, 50, 39.9671 - 0.0003), points, 4);
obj1.material = metal;
obj1.anno = "铸铁";

var obj2 = layer.addPipelineAt(new Drawsee.Vector3(116.1736, 50, 39.9671), points, 4);
obj2.material = plastic;
obj2.anno = "塑料";
