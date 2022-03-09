var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));
earthViewer.camera.setView(new Drawsee.Vector3(116.1736, 5000, 39.9671), 0, -30);


// 当点击鼠标右键，处于旋转三维视角状态时，再敲击方向键“上”，即进入自动向前飞行状态

// 飞行中，移动鼠标调整飞行方向，滚轮调整高低；“上”，“下”键可以加速、减速

// 点击任何鼠标键，或者敲击其他按键，自动飞行立刻结束

// 此模式比较适合地形或者倾斜摄影场景中浏览