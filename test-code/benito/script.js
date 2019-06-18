var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 0, 1000);
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x606060);
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var dirLight = new THREE.DirectionalLight(0xffffff, .75);
dirLight.position.setScalar(10);
scene.add(dirLight);
scene.add(new THREE.AmbientLight(0x404040));

var curve = new THREE.CatmullRomCurve3( [
    new THREE.Vector3(195.233239,0, 332.738883),
    new THREE.Vector3(191.793067,0, 282.026988),
    new THREE.Vector3(187.7929,0, 231.356819),
    new THREE.Vector3(181.53232,0, 180.930289),
    new THREE.Vector3(170.392842,0, 131.364977),
    new THREE.Vector3(153.858594,0, 83.331956),
    new THREE.Vector3(130.186014,0, 38.47051),
    new THREE.Vector3(92.769533,0, 4.919646),
    new THREE.Vector3(43.925318,0, 7.140777),
    new THREE.Vector3(13.49091,0, 46.503722),
    new THREE.Vector3(2.168484,0, 95.931314),
    new THREE.Vector3(0.33379,0, 146.668111),
    new THREE.Vector3(6.431608,0, 197.084419),
    new THREE.Vector3(18.792286,0, 246.363578),
    new THREE.Vector3(35.566381,0, 294.319731),
    new THREE.Vector3(56.571297,0, 340.595604),
    new THREE.Vector3(79.64811,0, 385.881253),
    new THREE.Vector3(103.808069,0, 430.599966)
]);
var curve1 = new THREE.CatmullRomCurve3( [
    new THREE.Vector3(103.808069,0, 430.599966),
    new THREE.Vector3(195.233239,0, 430.599966),
]);
var curve2 = new THREE.CatmullRomCurve3( [
    new THREE.Vector3(195.233239,0, 430.599966),
    new THREE.Vector3($("#myRange").val(),0, 332.738883)
]);

var testing = new THREE.CurvePath();
testing.add(curve);
testing.add(curve1);
testing.add(curve2);
var curveGeometry1 = new THREE.Geometry();
curveGeometry1.vertices = testing.getPoints(750);
var curveMaterial = new THREE.LineBasicMaterial({color: "white"});
var curveLine = new THREE.Line(curveGeometry1, curveMaterial);
scene.add(curveLine);

// var extrudeSettings = { amount: 19.2, bevelEnabled: false};
// var points = [];
// var shape = null;
// var shapeGeometry;
// var shapeMaterial = [
//   new THREE.MeshLambertMaterial({color:0xb5b5b5}),
//   new THREE.MeshLambertMaterial({color:"aqua"})
// ]
// var shapeMesh = new THREE.Mesh(shapeGeometry, shapeMaterial);
// scene.add(shapeMesh);
// curveLine.geometry.vertices.forEach((vertex, index)=>{
//   points.push(new THREE.Vector2(vertex.x, vertex.z)); // fill the array of points with THREE.Vector2() for re-use
// });
// function extrudeMesh(){
//   curveLine.geometry.vertices.forEach((vertex, index)=>{
//   	points[index].set(vertex.x, vertex.z); // re-use the array
//   });
// 	shape = new THREE.Shape(points);
// 	shapeGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
//   //shapeGeometry.rotateX(Math.PI * .5);
//   shapeGeometry.translate(0, 1, 0);
//   shapeMesh.geometry.dispose();
//   shapeMesh.geometry = shapeGeometry;
// }
// extrudeMesh();

var time = 0;
var curShift = 0;
render();
function render(){
    $("#myRange").val()
  time = Date.now() * 0.001;
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
function testt(){
    curveLine.geometry.verticesNeedUpdate = true;g
    //render();
}