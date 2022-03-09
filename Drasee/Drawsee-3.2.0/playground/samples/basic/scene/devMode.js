var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.open();

// 指定最后一个参数可以统一
var points = Drawsee.VectorHelper.Vector3ArrayFromXyzArray([[105.887282770, 531.25, 32.669598343], [105.897337504, 571.22, 32.688080976], [105.901953510, 896.69, 32.704540278]], 100);


// 在EarthViewer上按“shift+d”键，用于切换开发模式。底部的状态栏鼠标位置显示为百分制

// 右上角开发员窗口显示鼠标、相机保存当前视图setView需要的全部参数

// 开发模式下，按"c"键，更新窗口当前鼠标和相机信息

// 开发模式下，按"l"键，进入折线追踪状态，双击结束时，窗口包括追踪点的坐标数组, 
// 通过VectorHelper.Vector3ArrayFromXyzArray可以转换为Vector3数组


// 如果本编辑窗口干扰了EarthViewer按键，请切换到不显示代码的状态操作