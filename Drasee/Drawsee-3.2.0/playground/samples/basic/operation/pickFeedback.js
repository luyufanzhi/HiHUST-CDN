// 本示例展示如何用自定义动画做选中物体反馈

var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 2000, 39.9671), 0, -30);
earthViewer.isEnableMouseOverPick = true;

// 可以关掉系统的缺省选中行为
earthViewer.isHighlightPickedObject = false;

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");
layer.isPickable = true;
layer.isAnimation = true;

// 添加测试物体
for (var i = 0; i < 5; i++)
    layer.addBox(new Drawsee.Vector3(116.1736 - 0.004 + i * 0.002, 50, 39.9671), new Drawsee.Size3(100));

var layer2 = new Drawsee.ShapeLayer(earthViewer, "layer2");
layer2.addImage(new Drawsee.Vector3(116.1736, 100, 39.9671 - 0.003), "./images/star.png");
layer2.isPickable = true;
layer2.isAnimation = true;

// 因为选中的对象可能来自不同的图层，所以在earthViewer的消息里进行动画状态改变
earthViewer.onBeforeRender.add(function () {
    var pickedObjects = earthViewer.enumPickedObjects();
    for (var i = 0; i < pickedObjects.length; i++) {
        var obj = pickedObjects[i];

        if (obj.layerName === 'layer')
            obj.localTransform.heading += 5;
        else {
            var ratio = 2 * Math.abs(Math.sin(Drawsee.SystemTime.Now() * 0.003));
            obj.localTransform.scale(ratio, ratio, ratio);
        }

        obj.anno = "选中了" + pickedObjects[i].no;
    }
})

// 指取模式在鼠标离开物体时恢复对象缺省状态
earthViewer.onLeaveObject.add(function (e) {
    e.geoObject.localTransform.reset();
    e.geoObject.anno = "";
})

// 点击模式的状态恢复
earthViewer.onUnclickObject.add(function (e) {
    e.geoObject.localTransform.reset();
    e.geoObject.anno = "";
})