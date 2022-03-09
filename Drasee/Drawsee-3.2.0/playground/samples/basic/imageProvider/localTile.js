document.getElementById("toolbarDiv").innerHTML = ' \
<input type="button" value="Tms本地" onclick="openLocalTms()" /> \
<input type="button" value="天地图本地" onclick="openLocalTianDiTu()" /> ';

var earthViewer = new Drawsee.EarthViewer("mapDiv");
openLocalTms();

function openLocalTms() {
    earthViewer.open(new Drawsee.OpenStreetMapImageProvider());

    var provider = new Drawsee.LocalTmsImageProvider('/demodata/tileImage/jiangshan_21/');

    earthViewer.imageProviders.add(provider);
    earthViewer.camera.setView(new Drawsee.Vector3(121.526165212, 10000, 29.762831460));

    //// 同样的局部数据也可以用TemplateImageProvider
    //var detailProvider = new Drawsee.TemplateImageProvider({
    //    url: '/demodata/tileImage/jiangshan_21/{z}/{x}/{y}.png',
    //    extent: new Drawsee.GeoExtent(121.447267379339, 29.687162783278, 121.593089203254, 29.7902823264754)
    //});
    //earthViewer.imageProviders.add(detailProvider);
}

function openLocalTianDiTu() {
    // 天地图全国背景瓦片, 需要用TemplateImageProvider, 指定rootLevel为1, tilingType为Geographic
    var base = new Drawsee.TemplateImageProvider({
        url: '/demodata/tileImage/jiangshan_tianditu_image/{z}/{x}/{y}.jpg',
        tilingType: Drawsee.TilingType.Geographic,
        rootLevel: 1
    });

    earthViewer.open(base);

    // 添加标注层
    var annoProvider = new Drawsee.TemplateImageProvider({
        url: '/demodata/tileImage/jiangshan_tianditu_anno/{z}/{x}/{y}.png',
        tilingType: Drawsee.TilingType.Geographic,
        rootLevel: 1
    });

    earthViewer.imageProviders.add(annoProvider);
}


// LocalTmsImageProvider用于本地tms模式瓦片,数据根目录下有layer.json作为配置文件

// 如果没有配置文件，需要使用TemplateImageProvider，并指定url模板以及options中的相关参数