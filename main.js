"use strict";

let cubeNormals = [
    vec3(0, 0, -1),
    vec3(0, 0, -1),
    vec3(0, 0, -1),
    vec3(0, 0, -1),
    vec3(0, 0, -1),
    vec3(0, -0, 1),
    vec3(0, -0, 1),
    vec3(0, -0, 1),
    vec3(0, 0, 1),
    vec3(0, 0, 1),
    vec3(0, 0, 1),
    vec3(-1, 0, 0),
    vec3(-1, 0, 0),
    vec3(-1, 0, 0),
    vec3(-1, -0, -0),
    vec3(-1, -0, -0),
    vec3(-1, -0, -0),
    vec3(-1, -0, -0),
    vec3(-1, -0, -0),
    vec3(-1, -0, -0),
    vec3(-1, -0, 0),
    vec3(-1, -0, 0),
    vec3(-1, -0, 0),
    vec3(0, -1, 0),
    vec3(0, -1, 0),
    vec3(0, -1, 0),
    vec3(0, -1, 0),
    vec3(0, -1, 0),
    vec3(0, -1, 0),
    vec3(0, 1, 0),
    vec3(0, 1, 0),
    vec3(0, 1, 0),
    vec3(0, 1, -0),
    vec3(0, 1, -0),
    vec3(0, 1, -0),
]

let wheelnormals = [
    vec3(0, 0, 0.007141428428542851),
    vec3(0, 0, 0.007141428428542851),
    vec3(0, 0, 0.007141428428542851),
    vec3(0, 0, 0.003063434609435312),
    vec3(0, 0, 0.003063434609435312),
    vec3(0, 0, 0.003063434609435312),
    vec3(0, 0, 0.003),
    vec3(0, 0, 0.003),
    vec3(0, 0, 0.003),
    vec3(0, 0, 0.004584660633875595),
    vec3(0, 0, 0.004584660633875595),
    vec3(0, 0, 0.004584660633875595),
    vec3(-0, 0, 0.007141428428542851),
    vec3(-0, 0, 0.007141428428542851),
    vec3(-0, 0, 0.007141428428542851),
    vec3(-0, 0, 0.003063434609435312),
    vec3(-0, 0, 0.003063434609435312),
    vec3(-0, 0, 0.003063434609435312),
    vec3(0, -0, 0.003),
    vec3(0, -0, 0.003),
    vec3(0, -0, 0.003),
    vec3(0, -0, 0.004584660633875595),
    vec3(0, -0, 0.004584660633875595),
    vec3(0, -0, 0.004584660633875595),
    vec3(0, -0, 0),
    vec3(0, -0, 0),
    vec3(0, -0, 0),
    vec3(0, 0, 0.007141428428542851),
    vec3(0, 0, 0.007141428428542851),
    vec3(0, 0, 0.007141428428542851),
    vec3(0, 0, 0.003063434609435312),
    vec3(0, 0, 0.003063434609435312),
    vec3(0, 0, 0.003063434609435312),
    vec3(0, 0, 0.003),
    vec3(0, 0, 0.003),
    vec3(0, 0, 0.003),
    vec3(0, 0, 0.004584660633875595),
    vec3(0, 0, 0.004584660633875595),
    vec3(0, 0, 0.004584660633875595),
    vec3(-0, 0, 0.007141428428542851),
    vec3(-0, 0, 0.007141428428542851),
    vec3(-0, 0, 0.007141428428542851),
    vec3(-0, 0, 0.003063434609435312),
    vec3(-0, 0, 0.003063434609435312),
    vec3(-0, 0, 0.003063434609435312),
    vec3(0, -0, 0.003),
    vec3(0, -0, 0.003),
    vec3(0, -0, 0.003),
    vec3(0, -0, 0.004584660633875595),
    vec3(0, -0, 0.004584660633875595),
    vec3(0, -0, 0.004584660633875595),
    vec3(0, -0, 0),
    vec3(0, -0, 0),
    vec3(0, -0, 0),
]

let triangleNormals = [

    vec3(0, 0, -1),
    vec3(0, 0, -1),
    vec3(0, 0, -1),
    vec3(0, 0, -1),
    vec3(0, 0, -1),
    vec3(0, 0, -1),
    vec3(-1, -1, -0),
    vec3(-1, -1, -0),
    vec3(-1, -1, -0),
    vec3(-1, -1, 0),
    vec3(-1, -1, 0),
    vec3(-1, -1, 0),
    vec3(1, -0, 0),
    vec3(1, -0, 0),
    vec3(1, -0, 0),
    vec3(-1, -0, 0),
    vec3(-1, -0, 0),
    vec3(-1, -0, 0),
    vec3(0, -1, 0),
    vec3(0, -1, 0),
    vec3(0, -1, 0),
    vec3(-0, 1, 0),
    vec3(-0, 1, 0),
    vec3(-0, 1, 0),

]

function scale4(a, b, c) {
    var result = mat4();
    result[0][0] = a;
    result[1][1] = b;
    result[2][2] = c;
    return result;
}

let canvas, gl, program;

let NumVertices;

let points = [];
let colors = [];

let cubeBack_height = 3.0
let cubeBack_width = 2.0
let cubeBottomCenterLeft_height = 3.0
let cubeBottomCenterLeft_width = 1.5
let cubeBottomCenterCenter_height = 3.0
let cubeBottomCenterCenter_width = 0.3
let cubeBottomCenterRight_height = 3.0
let cubeBottomCenterRight_width = 1.5
let cubeFront_height = 2.5
let cubeFront_width = 2.0

let cubeAboveCenterLeft_height = 1.5
let cubeAboveCenterLeft_width = 0.75
let cubeAboveCenterCenter_height = 1.5
let cubeAboveCenterCenter_width = 0.3
let cubeAboveCenterRight_height = 1.5
let cubeAboveCenterRight_width = 0.75

let triLeft_height = 1.5
let triLeft_width = 0.75
let triRight_height = 1.5
let triRight_width = 0.75
let triFront_height = 0.5
let triFront_width = 2.0

let wheeAxisFront_height = 1
let wheeAxisFront_width = 1
let wheeAxisBack_height = 1
let wheeAxisBack_width = 1


let wheeFrontRight_height = 1
let wheeFrontRight_width = 1
let wheeFrontLeft_height = 1
let wheeFrontLeft_width = 1
let wheeBackRight_height = 1
let wheeBackRight_width = 1
let wheeBackLeft_height = 1
let wheeBackLeft_width = 1

let r, g, b, a;
let wireframe_ = true, wireframe_in_color_ = true;
//let scale = 1;
let keys = { 'w': false, 's': false, 'd': false, 'a': false, 'q': false, 'e': false, "up": false, "down": false, "right": false, "left": false };
let lightningActive = false;


let modelViewMatrix, projectionMatrix;

var Base = 0;
var LowerArm = 1;
var UpperArm = 2;


var theta = [0, 0, 0];
let scaleValues = [1, 1, 1];
let translateValues = [0, 0, 0];

let wheelAngle = 0;

var modelViewMatrixLoc;

let indiceBuffer, colorBuffer, colorLocation, vertexBuffer, vertexLocation;

let cam = { "near": -10, "far": 10, "radius": 0.1, "nearp": 4.326298083194987, "farp": 43.26298083194986, "radiusp": 25, "theta": 0, "phi": 0.0, "thetap": 0, "phip": 0.0, "dr": 5.0 * Math.PI / (180.0), "left": -10, "right": 10, "ytop": 10, "bottom": -10, "fovy": 45.0, "aspect": 0 };
let cam_look;
let cam_pos = { "at": vec3(0, 0, 0), "up": vec3(0, 1, 0) };
let radioprojection = 1;

var lightPosition = vec4(1.0, 1.0, 1.0, 0.0);
var lightAmbient = vec4(0.2, 0.2, 0.2, 1.0);
var lightDiffuse = vec4(1.0, 1.0, 1.0, 1.0);
var lightSpecular = vec4(1.0, 1.0, 1.0, 1.0);

var materialAmbient = vec4(1.0, 0.0, 1.0, 1.0);
var materialDiffuse = vec4(1.0, 0.8, 0.0, 1.0);
var materialSpecular = vec4(1.0, 0.8, 0.0, 1.0);
var materialShininess = 100.0;

var ctm;
var ambientColor, diffuseColor, specularColor;
var viewerPos;

function setprojection() {

    if (document.getElementById("rortho").checked)
        radioprojection = 1;

    if (document.getElementById("rperspec").checked)
        radioprojection = 0;

}

function applyCameraChangesortho() {

    document.getElementById("bzi").onclick = function () {
        if (radioprojection) {
            cam.near *= 1.1;
            cam.far *= 1.1;
        }
        else {
            cam.nearp *= 1.1;
            cam.farp *= 1.1;
        }
    }

    document.getElementById("bzd").onclick = function () {
        if (radioprojection) {
            cam.near *= 0.9;
            cam.far *= 0.9;
        }
        else {
            cam.nearp *= 0.9;
            cam.farp *= 0.9;
        }
    }

    document.getElementById("bcamappi").onclick = function () {
        if (radioprojection) {
            cam.near += 1;
            cam.far -= 1;
            cam.right -= 1;
            cam.left += 1;
            cam.ytop -= 1;
            cam.bottom += 1;
        } else {
            cam.radiusp -= 1;
        }
    }

    document.getElementById("bcamappd").onclick = function () {
        if (radioprojection) {
            cam.near -= 1;
            cam.far += 1;
            cam.right += 1;
            cam.left -= 1;
            cam.ytop += 1;
            cam.bottom -= 1;
        } else {
            cam.radiusp += 1;
        }
    }

    document.getElementById("bradiusi").onclick = function () {
        if (radioprojection) {

            cam.radius += 1;

        } else
            cam.radiusp += 1;
    }

    document.getElementById("bradiusd").onclick = function () {
        if (radioprojection) {

            cam.radius -= 1;

        } else
            cam.radiusp -= 1;
    }

    document.getElementById("bthetai").onclick = function () {
        if (radioprojection)
            cam.theta += .1;
        else
            cam.thetap += .1;
    }

    document.getElementById("bthetad").onclick = function () {
        if (radioprojection)
            cam.theta -= .1;
        else
            cam.thetap -= .1;
    }

    document.getElementById("bphii").onclick = function () {
        if (radioprojection)
            cam.phi += .1;
        else
            cam.phip += .1;
    }

    document.getElementById("bphid").onclick = function () {
        if (radioprojection)
            cam.phi -= .1;
        else
            cam.phip -= .1;
    }

}

function applyCarMove() {

    window.onkeydown = function (event) {


        switch (event.keyCode) {
            case 87:
                keys.w = true;
                break;
            case 83:
                keys.s = true;
                break;
            case 68:
                keys.d = true;
                break;
            case 65:
                keys.a = true;
                break;
            case 81:
                keys.q = true;
                break;
            case 69:
                keys.e = true;
                break;
            case 79:
                keys.up = true;
                break;
            case 76:
                keys.down = true;
                break;
            case 59:
                keys.right = true;
                break;
            case 75:
                keys.left = true;
                break;
        }

    }

    window.onkeyup = function (event) {

        switch (event.keyCode) {
            case 87:
                keys.w = false;
                break;
            case 83:
                keys.s = false;
                break;
            case 68:
                keys.d = false;
                break;
            case 65:
                keys.a = false;
                break;
            case 81:
                keys.q = false;
                break;
            case 69:
                keys.e = false;
                break;
            case 79:
                keys.up = false;
                break;
            case 76:
                keys.down = false;
                break;
            case 59:
                keys.right = false;
                break;
            case 75:
                keys.left = false;
                break;
        }
    }



}

function applyAngleChangesfromslider() {
    theta[0] = Number(document.getElementById("xrotateSlider").value), theta[1] = Number(document.getElementById("yrotateSlider").value), theta[2] = Number(document.getElementById("zrotateSlider").value);
}

function applyscaleChanges() {
    scaleValues[0] = Number(document.getElementById("xscale").value), scaleValues[1] = Number(document.getElementById("yscale").value), scaleValues[2] = Number(document.getElementById("zscale").value);
}

function applyAngleChanges() {
    theta[0] = Number(document.getElementById("xAngle").value), theta[1] = Number(document.getElementById("yAngle").value), theta[2] = Number(document.getElementById("zAngle").value);
}

function applyWireframeChanges() {
    let wireframeSelect = document.getElementById("changeWireframe");

    switch (wireframeSelect.selectedIndex) {
        case 0:
            wireframe_in_color_ = true;
            wireframe_ = !wireframe_;
            break;
        case 1:
            wireframe_ = true;
            wireframe_in_color_ = true;
            break;
        case 2:
            wireframe_ = true;
            wireframe_in_color_ = !wireframe_in_color_;
            break;
    }
}

function applyColorChanges() {

    let colorMenu = document.getElementById("colormenu");
    let colorMenu2 = document.getElementById("colormenu2");

    red = document.getElementById("red")
    blue = document.getElementById("blue")
    green = document.getElementById("green")
    alpha = document.getElementById("alpha")

    let r = Number(red.value), g = Number(green.value), b = Number(blue.value), a = Number(alpha.value);

    console.log(r + " " + g + " " + b + " " + a);


    if ((r > 1 || r < -1) || (g > 1 || g < -1) || (b > 1 || b < -1) || (a > 1 || a < -1)) {
        alert("r, g, b or a should be between -1.0 and 1.0");
        return;
    }

    switch (colorMenu.selectedIndex) {

        case 0:
            changeColorWheel(wheeFrontLeftVColors, vec4(r, g, b, a));
            changeColorWheel(wheeFrontRightVColors, vec4(r, g, b, a));
            changeColorWheel(wheeBackLeftVColors, vec4(r, g, b, a));
            changeColorWheel(wheeBackRightVColors, vec4(r, g, b, a));
            changeColorWheel(wheeAxisFrontVColors, vec4(r, g, b, a));
            changeColorWheel(wheeAxisBackVColors, vec4(r, g, b, a));
            changeColorCube(cubeBackVColors, "all", vec4(r, g, b, a));
            changeColorCube(cubeBottomCenterLeftVColors, "all", vec4(r, g, b, a));
            changeColorCube(cubeBottomCenterCenterVColors, "all", vec4(r, g, b, a));
            changeColorCube(cubeBottomCenterRightVColors, "all", vec4(r, g, b, a));
            changeColorCube(cubeFrontVColors, "all", vec4(r, g, b, a));
            changeColorCube(cubeAboveCenterLeftVColors, "all", vec4(r, g, b, a));
            changeColorCube(cubeAboveCenterCenterVColors, "all", vec4(r, g, b, a));
            changeColorCube(cubeAboveCenterRightVColors, "all", vec4(r, g, b, a));
            changeColorTriangle(triLeftVColors, "all", vec4(r, g, b, a));
            changeColorTriangle(triRightVColors, "all", vec4(r, g, b, a));
            changeColorTriangle(triFrontVColors, "all", vec4(r, g, b, a));

        case 1:
            //changeColorCube(colorMenu2[colorMenu2.selectedIndex].innerText, vec4(0, 0, 0, 1));
            changeColorWheel(wheeFrontLeftVColors, vec4(r, g, b, a));
            break;
        case 2:
            changeColorWheel(wheeFrontRightVColors, vec4(r, g, b, a));
            break;
        case 3:
            changeColorWheel(wheeBackLeftVColors, vec4(r, g, b, a));
            break;
        case 4:
            changeColorWheel(wheeBackRightVColors, vec4(r, g, b, a));
            break;
        case 5:
            changeColorWheel(wheeAxisFrontVColors, vec4(r, g, b, a));
            break;
        case 6:
            changeColorWheel(wheeAxisBackVColors, vec4(r, g, b, a));
            break;
        case 7:
            changeColorCube(cubeBackVColors, colorMenu2[colorMenu2.selectedIndex].value, vec4(r, g, b, a));
            break;
        case 8:
            changeColorCube(cubeBottomCenterLeftVColors, colorMenu2[colorMenu2.selectedIndex].value, vec4(r, g, b, a));
            break;
        case 9:
            changeColorCube(cubeBottomCenterCenterVColors, colorMenu2[colorMenu2.selectedIndex].value, vec4(r, g, b, a));
            break;
        case 10:
            changeColorCube(cubeBottomCenterRightVColors, colorMenu2[colorMenu2.selectedIndex].value, vec4(r, g, b, a));
            break;
        case 11:
            changeColorCube(cubeFrontVColors, colorMenu2[colorMenu2.selectedIndex].value, vec4(r, g, b, a));
            break;
        case 12:
            changeColorCube(cubeAboveCenterLeftVColors, colorMenu2[colorMenu2.selectedIndex].value, vec4(r, g, b, a));
            break;
        case 13:
            changeColorCube(cubeAboveCenterCenterVColors, colorMenu2[colorMenu2.selectedIndex].value, vec4(r, g, b, a));
            break;
        case 14:
            changeColorCube(cubeAboveCenterRightVColors, colorMenu2[colorMenu2.selectedIndex].value, vec4(r, g, b, a));
            break;
        case 15:
            changeColorTriangle(triLeftVColors, colorMenu2[colorMenu2.selectedIndex].value, vvec4(r, g, b, a));
            break;
        case 16:
            changeColorTriangle(triRightVColors, colorMenu2[colorMenu2.selectedIndex].value, vec4(r, g, b, a));
            break;
        case 17:
            changeColorTriangle(triFrontVColors, colorMenu2[colorMenu2.selectedIndex].value, vec4(r, g, b, a));
            break;
    }


}

function doHave(_str, _c) {
    for (let i = 0; i < _str.length; i++) {
        if (_str[i] == _c)
            return 1;
    }

    return 0;
}

function addInteraction() {


    applyCameraChangesortho();

    applyCarMove();

    document.getElementById("lightningA").onclick = function () {
        lightningActive = true;
    }

    document.getElementById("lightningI").onclick = function () {
        lightningActive = false;
    }

    document.getElementById("scaleApply").onclick = applyscaleChanges;

    // document.getElementById("bScale").onclick = function () {
    //     scale += .1;
    // }

    // document.getElementById("sScale").onclick = function () {
    //     scale -= .1;
    // }

    document.getElementById("angleApply").onclick = applyAngleChanges;

    let wireframeSelect = document.getElementById("changeWireframe");

    wireframeSelect.onclick = applyWireframeChanges;

    let colorMenu = document.getElementById("colormenu");
    let colorMenu2 = document.getElementById("colormenu2");

    colorMenu.onclick = function () {

        /*colorMenu2.onclick = function () {
        }*/

        console.log(colorMenu[colorMenu.selectedIndex].value[1]);
        //debugger;
        if (doHave(colorMenu[colorMenu.selectedIndex].value, "w")) {
            colorMenu2.innerHTML = "";
        } else if (doHave(colorMenu[colorMenu.selectedIndex].value, "c")) {
            colorMenu2.innerHTML = "<option value='front'>Front</option><option value='back'>Back</option></option><option value='right'>Right</option><option value='Left'>Left</option><option value='top'>Top</option><option value='bottom'>Bottom</option>"
        } else if (doHave(colorMenu[colorMenu.selectedIndex].value, "t")) {
            colorMenu2.innerHTML = "<option value='front'>Front</option><option value='back'>Back</option></option><option value='right'>Right</option><option value='Left'>Left</option><option value='bottom'>Bottom</option>";
        } else if (colorMenu[colorMenu.selectedIndex].value == "all")
            colorMenu2.innerHTML = "";

    }


    document.getElementById("colorApply").onclick = applyColorChanges;

}

function changeColorCube(_cubeVertexColors, _side, _color) {

    switch (_side) {
        case "front":
            for (let i = 0; i < 6; i++)
                _cubeVertexColors[i] = _color;
            break;
        case "back":
            for (let i = 6; i < 12; i++)
                _cubeVertexColors[i] = _color;
            break;
        case "right":
            for (let i = 12; i < 18; i++)
                _cubeVertexColors[i] = _color;
            break;
        case "left":
            for (let i = 18; i < 24; i++)
                _cubeVertexColors[i] = _color;
            break;
        case "top":
            for (let i = 24; i < 30; i++)
                _cubeVertexColors[i] = _color;
            break;
        case "bottom":
            for (let i = 30; i < 36; i++)
                _cubeVertexColors[i] = _color;
            break;
        case "all":
            changeColorCube(_cubeVertexColors, "front", _color);
            changeColorCube(_cubeVertexColors, "back", _color);
            changeColorCube(_cubeVertexColors, "right", _color);
            changeColorCube(_cubeVertexColors, "left", _color);
            changeColorCube(_cubeVertexColors, "top", _color);
            changeColorCube(_cubeVertexColors, "bottom", _color);
    }
}

function changeColorTriangle(_triangleVertexColors, _side, _color) {

    switch (_side) {
        case "front":
            for (let i = 0; i < 3; i++)
                _triangleVertexColors[i] = _color;
            break;
        case "back":
            for (let i = 3; i < 6; i++)
                _triangleVertexColors[i] = _color;
            break;
        case "right":
            for (let i = 6; i < 12; i++)
                _triangleVertexColors[i] = _color;
            break;
        case "left":
            for (let i = 12; i < 18; i++)
                _triangleVertexColors[i] = _color;
            break;
        case "bottom":
            for (let i = 18; i < 24; i++)
                _triangleVertexColors[i] = _color;
            break;
        case "all":
            changeColorTriangle(_triangleVertexColors, "front", _color);
            changeColorTriangle(_triangleVertexColors, "back", _color);
            changeColorTriangle(_triangleVertexColors, "right", _color);
            changeColorTriangle(_triangleVertexColors, "left", _color);
            changeColorTriangle(_triangleVertexColors, "bottom", _color);
            break;
    }
}

function changeColorWheel(_wheelVertexColors, _color) {

    for (let i = 0; i < _wheelVertexColors.length; i++)
        _wheelVertexColors[i] = _color;

}

function draw(_indices, _vertexColors, _vertices, _normals) {

    NumVertices = _indices.length;

    let indiceBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indiceBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(_indices), gl.STATIC_DRAW);

    //    -----------
    //  HAYDİ BİSMİLLAH
    //    -----------

    /*if(_vertexColors == null)
        _vertexColors = []
        for(let i = 0; i < NumVertices; i++)
            _vertexColors.push(vec4(0.0, 1.0, 0.0, 1.0))*/

    if(!lightningActive){
    let colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(_vertexColors), gl.STATIC_DRAW);
    
    let colorLocation = gl.getAttribLocation(program, "inColor");
    gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(colorLocation);
    }
    let vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(_vertices), gl.STATIC_DRAW);

    let vertexLocation = gl.getAttribLocation(program, "position");
    gl.vertexAttribPointer(vertexLocation, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertexLocation);
    if(lightningActive){
    let normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(_normals), gl.STATIC_DRAW);

    let norlmalLocation = gl.getAttribLocation(program, "normal");
    gl.vertexAttribPointer(norlmalLocation, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(norlmalLocation);
    }
}

window.onload = function init() {

    canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) { alert("WebGL isn't available"); }

    gl.viewport(0, 0, canvas.width, canvas.height);

    cam.aspect = canvas.width / canvas.height;

    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

    program = initShaders(gl, "vertex-shader", "fragment-shader");

    gl.useProgram(program);


    program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    // Create and initialize  buffer objects

    // let indiceBuffer = gl.createBuffer();
    // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indiceBuffer);
    // gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(indices), gl.STATIC_DRAW);

    // let colorBuffer = gl.createBuffer();
    // gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    // gl.bufferData(gl.ARRAY_BUFFER, flatten(vertexColors), gl.STATIC_DRAW);

    // let colorLocation = gl.getAttribLocation(program, "inColor");
    // gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 0, 0);
    // gl.enableVertexAttribArray(colorLocation);

    // let vertexBuffer = gl.createBuffer();
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    // gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    // let vertexLocation = gl.getAttribLocation(program, "position");
    // gl.vertexAttribPointer(vertexLocation, 3, gl.FLOAT, false, 0, 0);
    // gl.enableVertexAttribArray(vertexLocation);

    
    window.alert(" press w, a, s, d to translate, o, k, l, ş to rotate camera")
    wheeFrontLeftVColors = [...wheelColors];
    wheeFrontRightVColors = [...wheelColors];
    wheeBackLeftVColors = [...wheelColors];
    wheeBackRightVColors = [...wheelColors];

    cubeBackVColors = [...cubeVertexColors];
    cubeBottomCenterLeftVColors = [...cubeVertexColors];
    cubeBottomCenterCenterVColors = [...cubeVertexColors];
    cubeBottomCenterRightVColors = [...cubeVertexColors];
    cubeFrontVColors = [...cubeVertexColors];
    cubeAboveCenterLeftVColors = [...cubeVertexColors];
    cubeAboveCenterCenterVColors = [...cubeVertexColors];
    cubeAboveCenterRightVColors = [...cubeVertexColors];

    triLeftVColors = [...triangle3dColors];
    triRightVColors = [...triangle3dColors];
    triFrontVColors = [...triangle3dColors];

    wheeAxisFrontVColors = [...wheelColors];
    wheeAxisFrontVColors = [...wheelColors];
    wheeAxisBackVColors = [...wheelColors];
    wheeAxisBackVColors = [...wheelColors];


    

    modelViewMatrixLoc = gl.getUniformLocation(program, "modelViewMatrix");

    //projectionMatrix = ortho(-10, 10, -10, 10, -10, 10);
    //gl.uniformMatrix4fv(gl.getUniformLocation(program, "projectionMatrix"), false, flatten(projectionMatrix));

    addInteraction();

    render();
}

function rotateCamera() {

    if (keys.up)
        if (cam.theta > -1.8)
            cam.theta -= .1;

    if (keys.down)
        if (cam.theta < 1.8)
            cam.theta += .1;

    if (keys.right)
        if (cam.phi < 90)
            cam.phi += .1;

    if (keys.left)
        if (cam.phi > -90)
            cam.phi -= .1;
}

function translateCar() {

    // if (keys.w) {
    //     translateValues[0] += .1;
    //     wheelAngle += 5;
    //     if (keys.a)
    //         translateValues[2] -= .1;
    //     if (keys.d)
    //         translateValues[2] += .1;
    //     if (keys.q)
    //         translateValues[1] -= .1;
    //     if (keys.e)
    //         translateValues[1] += .1;
    // }

    // if (keys.s) {
    //     wheelAngle -= 5;
    //     translateValues[0] -= .1;
    //     if (keys.a)
    //         translateValues[2] += .1;
    //     if (keys.d)
    //         translateValues[2] -= .1;
    //     if (keys.q)
    //         translateValues[1] -= .1;
    //     if (keys.e)
    //         translateValues[1] += .1;
    // }

    if (keys.d) {

        translateValues[0] += .1;
        wheelAngle += 5;

    }

    if (keys.a) {

        translateValues[0] -= .1;
        wheelAngle -= 5;

    }

    if (keys.w) {

        translateValues[1] += .1;

    }

    if (keys.s) {

        translateValues[1] -= .1;

    }

    if (keys.q) {

        translateValues[2] -= .1;

    }

    if (keys.e) {

        translateValues[2] += .1;

    }

}

let render = function () {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    setprojection();
    if (radioprojection) {
        cam_look = vec3(cam.radius * Math.sin(cam.phi), cam.radius * Math.sin(cam.theta),
            cam.radius * Math.cos(cam.phi));
        modelViewMatrix = lookAt(cam_look, cam_pos.at, cam_pos.up);
        projectionMatrix = ortho(cam.left, cam.right, cam.bottom, cam.ytop, cam.near, cam.far);
    } else {
        cam_look = vec3(cam.radiusp * Math.sin(cam.theta) * Math.cos(cam.phi),
            cam.radiusp * Math.sin(cam.theta) * Math.sin(cam.phi), cam.radiusp * Math.cos(cam.theta));
        modelViewMatrix = lookAt(cam_look, cam_pos.at, cam_pos.up);
        projectionMatrix = perspective(cam.fovy, cam.aspect, cam.nearp, cam.farp);
    }

    gl.uniformMatrix4fv(gl.getUniformLocation(program, "projectionMatrix"), false, flatten(projectionMatrix));

    rotateCamera();
    translateCar();
    applyAngleChangesfromslider();

    modelViewMatrix = mult(rotate(theta[0], 1, 0, 0), modelViewMatrix);
    modelViewMatrix = mult(rotate(theta[1], 0, 1, 0), modelViewMatrix);
    modelViewMatrix = mult(rotate(theta[2], 0, 0, 1), modelViewMatrix);

    modelViewMatrix = mult(scale4(scaleValues[0], scaleValues[1], scaleValues[2]), modelViewMatrix);

    modelViewMatrix = mult(translate(translateValues[0], translateValues[1], translateValues[2]), modelViewMatrix);

    cubeBottomCenterCenter();

    //modelViewMatrix = mult(modelViewMatrix, translate(0.0, 0.0, 0.0));
    //modelViewMatrix = mult(modelViewMatrix, rotate(theta[LowerArm], 0, 0, 1 ));
    cubeBottomCenterLeft();

    //modelViewMatrix = mult(modelViewMatrix, translate(0.0, 0.0, 0.0));
    cubeBottomCenterRight();

    cubeBack();

    cubeFront();

    cubeAboveCenterCenter()

    cubeAboveCenterLeft()

    cubeAboveCenterRight()

    triFront();

    triRight();

    triLeft();

    wheeFrontLeft();

    wheeFrontRight();

    wheeBackLeft();

    wheeBackRight();

    wheeAxisFront();

    wheeAxisBack();

    if (lightningActive) {
        let ambientProduct = mult(lightAmbient, materialAmbient);
        let diffuseProduct = mult(lightDiffuse, materialDiffuse);
        let specularProduct = mult(lightSpecular, materialSpecular);

        gl.uniform4fv(gl.getUniformLocation(program, "ambient_car"),
            flatten(ambientProduct));
        gl.uniform4fv(gl.getUniformLocation(program, "diffuse_car"),
            flatten(diffuseProduct));
        gl.uniform4fv(gl.getUniformLocation(program, "specular_car"),
            flatten(specularProduct));
        gl.uniform4fv(gl.getUniformLocation(program, "light_position"),
            flatten(lightPosition));

        gl.uniform1f(gl.getUniformLocation(program,
            "shiness"), materialShininess);
        gl.uniform4fv(gl.getUniformLocation(program, "lightningActive"),
            flatten(vec4(1, 0, 0, 1)));
    } else {
        gl.uniform4fv(gl.getUniformLocation(program, "lightningActive"),
            flatten(vec4(0, 0, 0, 1)));
    }
    requestAnimFrame(render);
}

function cubeBack() {

    let newVColors = [...cubeBackVColors];

    if (wireframe_) {

        changeColorCube(newVColors, "all", vec4(0, 0, 0, 1));

        draw(cubeIndices, newVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeBack_width, cubeBack_height, cubeBack_height);
        var instanceMatrix = mult(translate(-(cubeBottomCenterCenter_width + cubeBottomCenterLeft_width) * 1.45, 0.5 * cubeBack_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(cubeIndices, cubeBackVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeBack_width, cubeBack_height, cubeBack_height);
        var instanceMatrix = mult(translate(-(cubeBottomCenterCenter_width + cubeBottomCenterLeft_width) * 1.45, 0.5 * cubeBack_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

}

function cubeBottomCenterLeft() {

    let newVColors = [...cubeBottomCenterLeftVColors];

    if (wireframe_) {

        changeColorCube(newVColors, "all", vec4(0, 0, 0, 1));

        draw(cubeIndices, newVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeBottomCenterLeft_width, cubeBottomCenterLeft_height, cubeBottomCenterLeft_height);
        var instanceMatrix = mult(translate(-cubeBottomCenterCenter_width * 3, 0.5 * cubeBottomCenterLeft_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(cubeIndices, cubeBottomCenterLeftVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeBottomCenterLeft_width, cubeBottomCenterLeft_height, cubeBottomCenterLeft_height);
        var instanceMatrix = mult(translate(-cubeBottomCenterCenter_width * 3, 0.5 * cubeBottomCenterLeft_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    // cBuffer = gl.createBuffer();
    // gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    // gl.bufferData( gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW );

    // var vColor = gl.getAttribLocation( program, "vColor" );
    // gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    // gl.enableVertexAttribArray( vColor );

    // gl.drawArrays(gl.LINE_LOOP, 0, NumVertices);
}

function cubeBottomCenterCenter() {

    let newVColors = [...cubeBottomCenterCenterVColors];

    if (wireframe_) {

        changeColorCube(newVColors, "all", vec4(0, 0, 0, 1));

        draw(cubeIndices, newVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeBottomCenterCenter_width, cubeBottomCenterCenter_height
            , cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate(0.0, 0.5 * cubeBottomCenterCenter_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(cubeIndices, cubeBottomCenterCenterVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeBottomCenterCenter_width, cubeBottomCenterCenter_height
            , cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate(0.0, 0.5 * cubeBottomCenterCenter_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }
}

function cubeBottomCenterRight() {

    let newVColors = [...cubeBottomCenterRightVColors];

    if (wireframe_) {

        changeColorCube(newVColors, "all", vec4(0, 0, 0, 1));

        draw(cubeIndices, newVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeBottomCenterRight_width, cubeBottomCenterRight_height, cubeBottomCenterRight_height);
        var instanceMatrix = mult(translate(cubeBottomCenterCenter_width * 3, 0.5 * cubeBottomCenterRight_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(cubeIndices, cubeBottomCenterRightVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeBottomCenterRight_width, cubeBottomCenterRight_height, cubeBottomCenterRight_height);
        var instanceMatrix = mult(translate(cubeBottomCenterCenter_width * 3, 0.5 * cubeBottomCenterRight_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

}

function cubeFront() {

    let newVColors = [...cubeFrontVColors];

    if (wireframe_) {

        changeColorCube(newVColors, "all", vec4(0, 0, 0, 1));

        draw(cubeIndices, newVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeFront_width, cubeFront_height, cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate((cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * cubeFront_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(cubeIndices, cubeFrontVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeFront_width, cubeFront_height, cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate((cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * cubeFront_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);

    }

}

function cubeAboveCenterLeft() {

    let newVColors = [...cubeAboveCenterLeftVColors];

    if (wireframe_) {

        changeColorCube(newVColors, "all", vec4(0, 0, 0, 1));

        draw(cubeIndices, newVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeAboveCenterLeft_width, cubeAboveCenterLeft_height, cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate(-cubeAboveCenterCenter_width * 1.7, 0.5 * cubeAboveCenterLeft_height + cubeBottomCenterLeft_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(cubeIndices, cubeAboveCenterLeftVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeAboveCenterLeft_width, cubeAboveCenterLeft_height, cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate(-cubeAboveCenterCenter_width * 1.7, 0.5 * cubeAboveCenterLeft_height + cubeBottomCenterLeft_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }
}

function cubeAboveCenterCenter() {

    let newVColors = [...cubeAboveCenterCenterVColors];

    if (wireframe_) {

        changeColorCube(newVColors, "all", vec4(0, 0, 0, 1));

        draw(cubeIndices, newVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeAboveCenterCenter_width, cubeAboveCenterCenter_height, cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate(0.0, 0.5 * cubeAboveCenterCenter_height + cubeBottomCenterCenter_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(cubeIndices, cubeAboveCenterCenterVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeAboveCenterCenter_width, cubeAboveCenterCenter_height, cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate(0.0, 0.5 * cubeAboveCenterCenter_height + cubeBottomCenterCenter_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }
}

function cubeAboveCenterRight() {

    let newVColors = [...cubeAboveCenterRightVColors];

    if (wireframe_) {

        changeColorCube(newVColors, "all", vec4(0, 0, 0, 1));

        draw(cubeIndices, newVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeAboveCenterRight_width, cubeAboveCenterRight_height, cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate(cubeAboveCenterCenter_width * 1.7, 0.5 * cubeAboveCenterLeft_height + cubeBottomCenterRight_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(cubeIndices, cubeAboveCenterRightVColors, cubeVertices, cubeNormals);

        var s = scale4(cubeAboveCenterRight_width, cubeAboveCenterRight_height, cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate(cubeAboveCenterCenter_width * 1.7, 0.5 * cubeAboveCenterLeft_height + cubeBottomCenterRight_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }
}


function triLeft() {

    let newVColors = [...triLeftVColors];

    if (wireframe_) {

        changeColorTriangle(newVColors, "all", vec4(0, 0, 0, 1));

        draw(triangle3dIndices, newVColors, triangle3dVertices, triangleNormals);

        var s = scale4(triLeft_width, triLeft_height, cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate((cubeAboveCenterCenter_width + cubeAboveCenterLeft_height) * 0.7, 0.5 * triLeft_height + cubeBottomCenterLeft_height, 0.0), s);
        instanceMatrix = mult(rotateY(180), instanceMatrix);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);

    }

    if (wireframe_in_color_) {

        draw(triangle3dIndices, triLeftVColors, triangle3dVertices, triangleNormals);

        var s = scale4(triLeft_width, triLeft_height, cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate((cubeAboveCenterCenter_width + cubeAboveCenterLeft_height) * 0.7, 0.5 * triLeft_height + cubeBottomCenterLeft_height, 0.0), s);
        instanceMatrix = mult(rotateY(180), instanceMatrix);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);

    }

}

function triRight() {

    let newVColors = [...triRightVColors];

    if (wireframe_) {

        changeColorTriangle(newVColors, "all", vec4(0, 0, 0, 1));

        draw(triangle3dIndices, newVColors, triangle3dVertices, triangleNormals);

        var s = scale4(triRight_width, triRight_height, cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate((cubeAboveCenterCenter_width + cubeAboveCenterRight_height) * 0.7, 0.5 * triRight_height + cubeBottomCenterRight_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(triangle3dIndices, triRightVColors, triangle3dVertices, triangleNormals);

        var s = scale4(triRight_width, triRight_height, cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate((cubeAboveCenterCenter_width + cubeAboveCenterRight_height) * 0.7, 0.5 * triRight_height + cubeBottomCenterRight_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }
}

function triFront() {

    let newVColors = [...triFrontVColors];

    if (wireframe_) {

        changeColorTriangle(newVColors, "all", vec4(0, 0, 0, 1));

        draw(triangle3dIndices, newVColors, triangle3dVertices, triangleNormals);

        var s = scale4(triFront_width, triFront_height, cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate((cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * triFront_height + cubeFront_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(triangle3dIndices, triFrontVColors, triangle3dVertices, triangleNormals);

        var s = scale4(triFront_width, triFront_height, cubeBottomCenterCenter_height);
        var instanceMatrix = mult(translate((cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * triFront_height + cubeFront_height, 0.0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }
}


function wheeAxisFront() {

    let newVColors = [...wheeAxisFrontVColors];

    if (wireframe_) {

        changeColorWheel(newVColors, vec4(0, 0, 0, 1));

        draw(wheelIndices, newVColors, wheelVertices, wheelnormals);

        var s = scale4(wheeAxisFront_width * 2, wheeAxisFront_height * 2, wheeAxisFront_height * 40);
        var instanceMatrix = mult(translate((cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * wheeAxisFront_height, 0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(wheelIndices, wheeAxisFrontVColors, wheelVertices, wheelnormals);

        var s = scale4(wheeAxisFront_width * 2, wheeAxisFront_height * 2, wheeAxisFront_height * 40);
        var instanceMatrix = mult(translate((cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * wheeAxisFront_height, 0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }
}

function wheeAxisBack() {

    let newVColors = [...wheeAxisBackVColors];

    if (wireframe_) {

        changeColorWheel(newVColors, vec4(0, 0, 0, 1));

        draw(wheelIndices, newVColors, wheelVertices, wheelnormals);

        var s = scale4(wheeAxisBack_width * 2, wheeAxisBack_height * 2, wheeAxisBack_height * 40);
        var instanceMatrix = mult(translate(-(cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * wheeAxisBack_height, 0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(wheelIndices, wheeAxisBackVColors, wheelVertices, wheelnormals);

        var s = scale4(wheeAxisBack_width * 2, wheeAxisBack_height * 2, wheeAxisBack_height * 40);
        var instanceMatrix = mult(translate(-(cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * wheeAxisBack_height, 0), s);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }
}





function wheeFrontLeft() {

    let newVColors = [...wheeFrontLeftVColors];

    if (wireframe_) {

        changeColorWheel(newVColors, vec4(0, 0, 0, 1));

        draw(wheelIndices, newVColors, wheelVertices, wheelnormals);

        var s = scale4(wheeFrontLeft_width * 9, wheeFrontLeft_height * 9, cubeBottomCenterCenter_height * 1);
        let instanceMatrix = mult(translate(0, 0, 0), s)
        instanceMatrix = mult(rotateZ(-wheelAngle), instanceMatrix)
        instanceMatrix = mult(translate((cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * wheeFrontLeft_height, 2), instanceMatrix);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(wheelIndices, wheeFrontLeftVColors, wheelVertices, wheelnormals);

        var s = scale4(wheeFrontLeft_width * 9, wheeFrontLeft_height * 9, cubeBottomCenterCenter_height * 1);
        let instanceMatrix = mult(translate(0, 0, 0), s)
        instanceMatrix = mult(rotateZ(-wheelAngle), instanceMatrix)
        instanceMatrix = mult(translate((cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * wheeFrontLeft_height, 2), instanceMatrix);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

}

function wheeFrontRight() {

    let newVColors = [...wheeFrontRightVColors];

    if (wireframe_) {

        changeColorWheel(newVColors, vec4(0, 0, 0, 1));

        draw(wheelIndices, newVColors, wheelVertices, wheelnormals);

        var s = scale4(wheeFrontRight_width * 9, wheeFrontRight_height * 9, cubeBottomCenterCenter_height * 1);
        let instanceMatrix = mult(translate(0, 0, 0), s);
        instanceMatrix = mult(rotateZ(wheelAngle), instanceMatrix)
        instanceMatrix = mult(translate((cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * wheeFrontRight_height, -2), instanceMatrix);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(wheelIndices, wheeFrontRightVColors, wheelVertices, wheelnormals);

        var s = scale4(wheeFrontRight_width * 9, wheeFrontRight_height * 9, cubeBottomCenterCenter_height * 1);
        let instanceMatrix = mult(translate(0, 0, 0), s);
        instanceMatrix = mult(rotateZ(wheelAngle), instanceMatrix)
        instanceMatrix = mult(translate((cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * wheeFrontRight_height, -2), instanceMatrix);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

}

function wheeBackLeft() {

    let newVColors = [...wheeBackLeftVColors];

    if (wireframe_) {

        changeColorWheel(newVColors, vec4(0, 0, 0, 1));

        draw(wheelIndices, newVColors, wheelVertices, wheelnormals);

        var s = scale4(wheeFrontLeft_width * 9, wheeFrontLeft_height * 9, cubeBottomCenterCenter_height * 1);
        let instanceMatrix = mult(translate(0, 0, 0), s);
        instanceMatrix = mult(rotateZ(wheelAngle), instanceMatrix);
        instanceMatrix = mult(translate(-(cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * wheeFrontLeft_height, -2), instanceMatrix);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(wheelIndices, wheeBackLeftVColors, wheelVertices, wheelnormals);

        var s = scale4(wheeFrontLeft_width * 9, wheeFrontLeft_height * 9, cubeBottomCenterCenter_height * 1);
        let instanceMatrix = mult(translate(0, 0, 0), s);
        instanceMatrix = mult(rotateZ(wheelAngle), instanceMatrix);
        instanceMatrix = mult(translate(-(cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * wheeFrontLeft_height, -2), instanceMatrix);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

}

function wheeBackRight() {

    let newVColors = [...wheeBackRightVColors];

    if (wireframe_) {

        changeColorWheel(newVColors, vec4(0, 0, 0, 1));

        draw(wheelIndices, newVColors, wheelVertices, wheelnormals);

        var s = scale4(wheeFrontLeft_width * 9, wheeFrontLeft_height * 9, cubeBottomCenterCenter_height * 1);
        let instanceMatrix = mult(translate(0, 0, 0), s);
        instanceMatrix = mult(rotateZ(-wheelAngle), instanceMatrix);
        instanceMatrix = mult(translate(-(cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * wheeFrontLeft_height, 2), instanceMatrix);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.LINE_LOOP, NumVertices, gl.UNSIGNED_BYTE, 0);
    }

    if (wireframe_in_color_) {

        draw(wheelIndices, wheeBackRightVColors, wheelVertices, wheelnormals);

        var s = scale4(wheeFrontLeft_width * 9, wheeFrontLeft_height * 9, cubeBottomCenterCenter_height * 1);
        let instanceMatrix = mult(translate(0, 0, 0), s);
        instanceMatrix = mult(rotateZ(-wheelAngle), instanceMatrix);
        instanceMatrix = mult(translate(-(cubeBottomCenterCenter_width + cubeBottomCenterRight_width) * 1.45, 0.5 * wheeFrontLeft_height, 2), instanceMatrix);
        var t = mult(modelViewMatrix, instanceMatrix);
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(t));
        gl.drawElements(gl.TRIANGLES, NumVertices, gl.UNSIGNED_BYTE, 0);
    }
}