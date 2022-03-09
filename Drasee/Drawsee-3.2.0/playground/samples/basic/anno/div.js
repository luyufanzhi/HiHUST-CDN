var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 5000, 39.9671), 0, -60);

var divLayer = new Drawsee.DivLayer(earthViewer, "myDivLayer");

var div1 = createTestDiv();
var div2 = createTestDiv2();

// 直接在指定位置添加div
divLayer.addObject(new Drawsee.Vector3(116.1736, 100, 39.9671), div1, new Drawsee.Vector2(0, -5));

// 添加一个三维物体，然后添加关联的div
var layer = new Drawsee.ShapeLayer(earthViewer, "layer");
var geoObj = layer.addBall(new Drawsee.Vector3(116.1736, 100, 39.9671 - 0.005), new Drawsee.Size3(50));
var divObj = divLayer.addObject(geoObj, div2); //, new Drawsee.Vector2(120, 0));

// 控制显示距离
divObj.maxVisibleDistance = 8000;
divObj.horizontalAlignment = Drawsee.HorizontalAlignment.Right;
divObj.verticalAlignment = Drawsee.VerticalAlignment.Top;

// 创建div, 需要指定pixel模式的大小
function createTestDiv() {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.style.position = "absolute";
    div.style.width = "140px";
    div.style.height = "80px";
    div.style.backgroundColor = "white";
    div.innerHTML = '<span id ="txtValue" style="background-color:red;font-size:20px;color:white;">div直接指定位置</span>';

    return div;
}

function createTestDiv2() {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.style.position = "absolute";
    div.style.width = "240px";
    div.style.height = "80px";
    div.style.backgroundColor = "blue";
    div.innerHTML = '<span id ="txtValue" style="background-color:yellow;font-size:30px;color:red;">Div关联GeoObject</span>';

    return div;
}

