document.getElementById("toolbarDiv").innerHTML = ' \
<input type="button" value="ArcGis" onclick="openArcGis()" /> \
<input type="button" value="Wms" onclick="openWms()" /> \
<input type="button" value="Wmts" onclick="openWmts()" /> \
<input type="button" value="天地图w" onclick="openTianDiTuWmtsW()" /> \
<input type="button" value="天地图c" onclick ="openTianDiTuWmtsC()" /> ';

var earthViewer = new Drawsee.EarthViewer("mapDiv");
openArcGis();

// ArcGis也可以直接指定服务地址创建
function openArcGis() {
    var provider = new Drawsee.ArcGisImageProvider({
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer',
        maxLevel:4,
    });
    earthViewer.open(provider);
}

function openWms() {
    var provider = new Drawsee.WmsImageProvider({
        url: 'https://basemap.nationalmap.gov/arcgis/services/USGSHydroCached/MapServer/WMSServer',
        tilingType: Drawsee.TilingType.Geographic,
        layers: '0',
    });
    earthViewer.open(provider);
}

function openWmts() {
    var provider = new Drawsee.WmtsImageProvider({
         url : 'http://basemap.nationalmap.gov/arcgis/rest/services/USGSShadedReliefOnly/MapServer/WMTS',
         layer : 'USGSShadedReliefOnly',
         style : 'default',
         format : 'image/jpeg',
         tileMatrixSet : 'default028mm',
         });
    earthViewer.open(provider);
}

// 天地图墨卡托数据集。 如果WmtsImageProvider的url中指定了除了{s}之外的其他模式，比如{TileRow}，就必须如下完全指定
function openTianDiTuWmtsW() {
    var provider = new Drawsee.WmtsImageProvider({
        url: "http://{s}.tianditu.gov.cn/img_w/wmts?tk=" + "eb8356e753b3f970c41ad67c534d7b1b" + "&service=wmts&request=GetTile&version=1.0.0" +
            "&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default",
        subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"], 
        maxLevel: 4,
    });
    earthViewer.open(provider);
}

// 天地图Geographic数据集。如果url只指定服务地址和token，其他参数通过layer,tileMatrixSetID 可以通过
// 天地图Geographic瓦片很特殊，根层级从1开始，所以必须指定rootLevel为1
function openTianDiTuWmtsC() {
    var provider = new Drawsee.WmtsImageProvider({
        url: "http://{s}.tianditu.gov.cn/img_c/wmts?tk=" + "eb8356e753b3f970c41ad67c534d7b1b",
        tilingType: Drawsee.TilingType.Geographic,
        subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        layer: 'img',
        tileMatrixSet:'c',
        rootLevel: 1
    });
    earthViewer.open(provider);
}

// 使用构造函数options参数, 可以创建更丰富的ImageProvider

// url: 必须提供。其他参数
// tilingType: 包括WebMercator和Geographic，缺省使用WebMercator，需要开发者根据瓦片投影类型自行判断；
// accessToken: 密码通过
