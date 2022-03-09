// 这个例子完全来自Babylon示例代码，在Drawsee.EarthViewer里渲染。设置直角坐标模式，对于微观场景更合适
// 虽然游戏仿真技术已经比较细致，比如玻璃球复杂的反射折射，但远景环境是预先烘培，与真实还有差距，忽略了几个物体本身
// 详细的理解需要更多深入Babylon API，这里只是展示材质渲染可以达到的一些效果

var earthViewer = new Drawsee.EarthViewer("mapDiv");
earthViewer.isEarthCoord = false; // 直角坐标模式
earthViewer.isAxisVisible = false;
earthViewer.isStatusBarVisible = false;
earthViewer.camera.setNavigateRange(new Drawsee.Vector3(0, 0, 0), 500);

var scene = earthViewer.globalScene;

// Environment Texture
var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("images/babylon/environment.dds", scene);

scene.imageProcessingConfiguration.exposure = 0.6;
scene.imageProcessingConfiguration.contrast = 1.6;

// Skybox
var hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene);
var hdrSkyboxMaterial = new BABYLON.PBRMaterial("skyBox", scene);
hdrSkyboxMaterial.backFaceCulling = false;
hdrSkyboxMaterial.reflectionTexture = hdrTexture.clone();
hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
hdrSkyboxMaterial.microSurface = 1.0;
hdrSkyboxMaterial.disableLighting = true;
hdrSkybox.material = hdrSkyboxMaterial;
hdrSkybox.infiniteDistance = true;

// Create meshes
var sphereGlass = BABYLON.Mesh.CreateSphere("sphereGlass", 48, 30.0, scene);
sphereGlass.translate(new BABYLON.Vector3(1, 0, 0), -60);

var sphereMetal = BABYLON.Mesh.CreateSphere("sphereMetal", 48, 30.0, scene);
sphereMetal.translate(new BABYLON.Vector3(1, 0, 0), 60);

var spherePlastic = BABYLON.Mesh.CreateSphere("spherePlastic", 48, 30.0, scene);
spherePlastic.translate(new BABYLON.Vector3(0, 0, 1), -60);

var woodPlank = BABYLON.MeshBuilder.CreateBox("plane", { width: 65, height: 1, depth: 65 }, scene);

// Create materials
var glass = new BABYLON.PBRMaterial("glass", scene);
glass.reflectionTexture = hdrTexture;
glass.refractionTexture = hdrTexture;
glass.linkRefractionWithTransparency = true;
glass.indexOfRefraction = 0.52;
glass.alpha = 0;
glass.microSurface = 1;
glass.reflectivityColor = new BABYLON.Color3(0.2, 0.2, 0.2);
glass.albedoColor = new BABYLON.Color3(0.85, 0.85, 0.85);
sphereGlass.material = glass;

var metal = new BABYLON.PBRMaterial("metal", scene);
metal.reflectionTexture = hdrTexture;
metal.microSurface = 0.96;
metal.reflectivityColor = new BABYLON.Color3(0.85, 0.85, 0.85);
metal.albedoColor = new BABYLON.Color3(0.01, 0.01, 0.01);
sphereMetal.material = metal;

var plastic = new BABYLON.PBRMaterial("plastic", scene);
plastic.reflectionTexture = hdrTexture;
plastic.microSurface = 0.96;
plastic.albedoColor = new BABYLON.Color3(0.206, 0.94, 1);
plastic.reflectivityColor = new BABYLON.Color3(0.003, 0.003, 0.003);
spherePlastic.material = plastic;

var wood = new BABYLON.PBRMaterial("wood", scene);
wood.reflectionTexture = hdrTexture;
wood.environmentIntensity = 1;
wood.specularIntensity = 0.3;

wood.reflectivityTexture = new BABYLON.Texture("images/babylon/reflectivity.png", scene);
wood.useMicroSurfaceFromReflectivityMapAlpha = true;

wood.albedoColor = BABYLON.Color3.White();
wood.albedoTexture = new BABYLON.Texture("images/babylon/albedo.png", scene);
woodPlank.material = wood;
