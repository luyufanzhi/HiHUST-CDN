var earthViewer = new Drawsee.EarthViewer("mapDiv");

let imageProvider = new Drawsee.BingImageProvider(Drawsee.BingImageStyle.Arial);

// 指定extent来限制影像显示区域
let openStreetImageProvider = new Drawsee.OpenStreetMapImageProvider({
    extent: new Drawsee.GeoExtent(100, 20, 121.593089203254, 30)
});

// open中指定的provider是基础影像背景
earthViewer.open(imageProvider);

// 叠加区域影像
earthViewer.imageProviders.add(openStreetImageProvider);

// 叠加标注层，本地运行时需换成你自己的key
earthViewer.imageProviders.add(new Drawsee.TianDiTuImageProvider(Drawsee.TianDiTuImageStyle.ChineseImageAnno, "")); 
