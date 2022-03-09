var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open(new Drawsee.ArcGisImageProvider(Drawsee.ImageType.Image),
    new Drawsee.DrawseeTerrainProvider("/demodata/terrain/"));

// 使用openAnno可以在地球影像背景上叠加一层瓦片层，通常使用天地图标注层。注意需要换上您自己申请的天地图key                    
earthViewer.openAnno(new Drawsee.TianDiTuImageProvider(Drawsee.ImageType.ImageAnno, ""));

earthViewer.camera.setView(new Drawsee.Vector3(116, 4000000, 40), 0, -30);
