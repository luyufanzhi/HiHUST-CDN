document.getElementById("toolbarDiv").innerHTML = ' \
<input type="button" value="百度" onclick="openBaidu()" /> \
<input type="button" value="腾讯" onclick="openTencent()" />';

var earthViewer = new Drawsee.EarthViewer("mapDiv");
openBaidu();

// 百度地图的经纬度是加密坐标
function openBaidu() {
    var provider = new Drawsee.TemplateImageProvider({
        url: 'http://online{ss}.map.bdimg.com/onlinelabel/?qt=tile&x={sx}&y={sy}&z={sz}&styles=pl&scaler=1&p=1',
        customTags: {
            sx: function (imageProvider, handle) {
                return handle.x - (1 << handle.level) / 2;
            },
            sy: function (imageProvider, handle) {
                return (1 << handle.level) / 2 - handle.y - 1;
            },
            sz: function (imageProvider, handle) {
                return handle.level + 1;
            },
            ss: function (imageProvider, handle) {
                return (handle.x + handle.y + handle.level)%10;
            },
        }
    });

    earthViewer.open(provider);
}

function openTencent() {
    var provider = new Drawsee.TemplateImageProvider({
        url: 'https://p2.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{reverseY}.jpg?version=229',
        customTags: {
            sx: function (imageProvider, handle) {
                return handle.x >> 4;
            },
            sy: function (imageProvider, handle) {
                return ((1 << handle.level) - handle.y) >> 4;
            },
        }
    });
    earthViewer.open(provider);
}

// TemplateImageProvider可以使用url模板来创建，规则与Cesium基本兼容。回调函数参数类型不同

// 内置的模板已经有：{s}子域，{z}层级，{x}{y}{reverseX}{reverseY}，
// {westDegrees} 东西南北经纬度范围，{westProjected}投影坐标范围等

// 开发者可以通过customTags定义新的模板函数。名称需要不同于内置模板，回调函数参数类型为(IImageProvider, QuadtreeHandle)