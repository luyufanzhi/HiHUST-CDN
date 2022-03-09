var earthViewer = new Drawsee.EarthViewer("mapDiv");

// TerrainProvider提供地形
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));

earthViewer.camera.setView(new Drawsee.Vector3(101.9151, 27000, 29.5819), 55, -30);


// 下载区有Drawsee格式全国30米精度地形。下载到本地后解压缩，TerrainProvider构造函数url指向该数据的根目录

// 目前版本没有支持导入局部精细格式。

