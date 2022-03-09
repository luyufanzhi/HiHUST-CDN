var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 2000, 39.9671), 0, -30);

var layer = new Drawsee.ShapeLayer(earthViewer, "layer");
layer.isAnimation = true;

var meshObj = layer.addPlane(new Drawsee.Vector3(116.1736, 100, 39.9671), 500, 400, 32);
meshObj.material.isCullBackFace = false;
meshObj.color = Drawsee.Color.Red;


meshObj.onBeforeRender.add(function (obj) {
    var second = Drawsee.SystemTime.Now() * 0.001;
    var vertexData = meshObj.vertexData;
    var positions = vertexData.positions;
    for (var i = 0; i < positions.length; i++) {
        positions[i].y = 50 * Math.sin(positions[i].x * 0.02 + second * 2);
    }

    vertexData.normals = Drawsee.VectorHelper.CalcNormals(vertexData.positions, vertexData.indices);
    meshObj.updateMesh(vertexData);
}
)
