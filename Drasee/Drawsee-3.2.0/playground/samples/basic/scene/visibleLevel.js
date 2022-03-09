var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open(null, new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));
earthViewer.openAnno(new Drawsee.TianDiTuImageProvider(Drawsee.ImageType.ImageAnno, ""));

earthViewer.minAnnoVisibleLevel = 10;

earthViewer.maxTerrainLevel = 12;

earthViewer.camera.setView(new Drawsee.Vector3(116.1017, 50000, 39.9335), 0, -90);

//可以控制标注和地形的最大最小显示层级。缺省为0-20级。