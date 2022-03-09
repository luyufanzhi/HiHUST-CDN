var earthViewer = new Drawsee.EarthViewer("mapDiv");

// 打开drawsee内部地形格式
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));

earthViewer.camera.setView(new Drawsee.Vector3(101.9151, 27000, 29.5819), 55, -30);


// 推荐使用Cesium的.terrain地形格式，drawsee格式主要是为内部项目兼容

// 原TerrainProvider类废除