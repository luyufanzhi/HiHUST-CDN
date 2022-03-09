/// <reference path="./jslib/monaco.d.ts" />
//#region constructor
var rhs = {
    domNode: document.getElementById('javascriptEditor'),
    editor: null
};
var g_isDebug = false;
var sampleDiv = document.getElementById('sampleDiv');
var sampleFrame = document.getElementById('sampleFrame');
var runDiv = document.getElementById('runDiv');
var sampleIndexDiv = document.getElementById('sampleIndexDiv');
var editorLoaded = false;
var sampleLoaded = false;
loadTsDefine();
var _urlRandom;
var _currentSampleName;
var isSampleLocal;
function loadTsDefine() {
    _urlRandom = Math.random().toString(); // assure each run will reload once
    xhr("./jslib/drawsee.d.ts.txt", function (res) {
        var drawseeStr = res.responseText;
        xhr("./jslib/babylon.d.ts.txt", function (res) {
            var babylonStr = res.responseText;
            require.config({ paths: { 'vs': './jslib/monaco/vs' } });
            require(['vs/editor/editor.main'], function () {
                rhs.editor = monaco.editor.create(rhs.domNode, {
                    value: "",
                    //language: "typescript",
                    language: "javascript",
                    //wrappingColumn: 0,
                    minimap: { enabled: false },
                    //scrollBeyondLastLine: false,
                    //theme: "vs-dark",
                    readOnly: false
                });
                editorLoaded = true;
                monaco.languages.typescript.javascriptDefaults.addExtraLib(drawseeStr, 'drawsee.d.ts');
                monaco.languages.typescript.javascriptDefaults.addExtraLib(babylonStr, 'babylon.d.ts');
                monaco.languages.typescript.typescriptDefaults.addExtraLib(drawseeStr, 'drawsee.d.ts');
                monaco.languages.typescript.typescriptDefaults.addExtraLib(babylonStr, 'babylon.d.ts');
                if (_currentSampleName)
                    loadSample(_currentSampleName, getIsSampleLocal());
            });
        }, null);
    }, null);
}
//#endregion
//#region sample
function getIsSampleLocal() {
    return isSampleLocal;
}
function loadSample(name, isLocal) {
    if (!name) {
        name = _currentSampleName;
    }
    // here must use a trick to prevent isSampleLocal is repeat to set to false, it can be set only once
    if (isLocal && !isSampleLocal)
        isSampleLocal = isLocal;
    if (rhs.editor) {
        var samplePath = "./samples/" + name + ".js?" + _urlRandom;
        xhr(samplePath, function (xhr) {
            rhs.editor.setValue(xhr.responseText);
            runSample();
        });
    }
    _currentSampleName = name;
}
function runSample() {
    focusSample();
    if (isSampleLocal)
        sampleFrame.src = 'samplePageLocal.html';
    else
        sampleFrame.src = 'samplePage.html';
}
function focusSample() {
    sampleFrame.contentWindow.focus();
}
function getRunCode() {
    if (!editorLoaded)
        return "";
    return rhs.editor.getValue();
}
function showSampleHtml(useToolbar) {
    if (!_currentSampleName)
        return;
    var url = "./showHtml.aspx?name=" + _currentSampleName;
    if (useToolbar)
        url += "&ui=1";
    window.open(url);
}
//#endregion
//#region load helper
function xhr(url, complete, error) {
    if (error === void 0) { error = null; }
    _xhr(url + "?" + _urlRandom, complete, error);
}
function _xhr(url, complete, error) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if ((req.status >= 200 && req.status < 300) || req.status === 1223) {
                complete(req);
            }
            else {
                error && error(req);
            }
            req.onreadystatechange = function () { };
        }
    };
    req.open("GET", url, true);
    req.responseType = "";
    req.send(null);
}
//#endregion
//#region ui layout
function updateWindowLayout() {
    resize();
}
function getCheckValue(name) {
    var checkDiv = document.getElementById(name);
    if (checkDiv)
        return checkDiv.checked;
    return false;
}
// resize
var sampleLeft = 0;
function resize() {
    var topbarHeight = 40;
    var horizontalSpace = 10;
    var leftSpace = 2;
    var windowHeight = window.innerHeight || document.body.offsetHeight || document.documentElement.offsetHeight;
    var halfWidth = (document.body.clientWidth - horizontalSpace - leftSpace) / 2 - 2;
    var isCodeVisible = getCheckValue("checkCode");
    if (isCodeVisible) {
        rhs.domNode.style.visibility = "visible";
        rhs.domNode.style.position = "absolute";
        rhs.domNode.style.left = 2 + "px";
        rhs.domNode.style.width = halfWidth + "px";
        rhs.domNode.style.top = topbarHeight + "px";
        rhs.domNode.style.bottom = "0px";
        if (rhs.editor) {
            rhs.editor.layout();
        }
        sampleLeft = halfWidth + horizontalSpace;
    }
    else {
        rhs.domNode.style.visibility = "hidden";
        sampleLeft = 0;
    }
    sampleDiv.style.position = "absolute";
    sampleDiv.style.left = sampleLeft + "px";
    sampleDiv.style.top = "0px";
    sampleDiv.style.right = "0px";
    if (sampleIndexDiv) {
        var isIndexVisible = getCheckValue("checkIndex");
        if (isIndexVisible)
            sampleIndexDiv.style.visibility = "visible";
        else
            sampleIndexDiv.style.visibility = "hidden";
    }
    focusSample();
}
resize();
window.onresize = resize;
//#endregion
