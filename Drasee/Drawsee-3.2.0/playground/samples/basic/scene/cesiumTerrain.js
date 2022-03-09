var earthViewer = new Drawsee.EarthViewer("mapDiv");

// 打开.terrain格式数据，指定数据根目录
earthViewer.open(null, new Drawsee.CesiumTerrainProvider("/demodata/cesiumTerrain/gansu_small/"));


// 目前支持quantized-mesh,不支持heightmap,不支持waterMask

// 打开地形时，如果没有显式调用setView，系统缺省会自动跳转到地形范围附近

