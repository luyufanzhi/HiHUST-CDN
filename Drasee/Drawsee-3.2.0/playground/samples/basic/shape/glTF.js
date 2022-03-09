var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 100, 39.9671), 0, -30);

// 通过BabylonLayer融合Babylon渲染
var layer = new Drawsee.BabylonLayer(earthViewer, "layer");
layer.isAnimation = true;
layer.isPickable = true;

var gltfUrl = "./data/model/glTF/RiggedElf/RiggedElf.gltf";

// 简单添加
layer.addModel(new Drawsee.Vector3(116.1736, 1, 39.9671), gltfUrl);

// 如果要获得添加的对象，需要通过Promise回调函数，这一点与ShapeLayer不同
layer.addModel(new Drawsee.Vector3(116.1736, 10, 39.9671), gltfUrl).then(function (obj) {
    // 对象类型是BabylonGeoObject，可以使用BabylonAPI旋转对象
    obj.mesh.rotate(new Drawsee.Vector3(0, 1, 0), Math.PI);
});


// gltf 格式渲染是通过Babylon，包装的接口对象比较简单，目前还不支持clampToGround
// 复杂的功能调用需要直接使用BabylonAPI