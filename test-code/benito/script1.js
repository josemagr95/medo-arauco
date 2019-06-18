var camera, scene, renderer;

init();
animate();

function init() {
    //camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.010, 1000 );
    //camera.position.set( 0, 0, 700);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.set(0, 0, 700);
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x606060);
    document.body.appendChild(renderer.domElement);
    //scene = new THREE.Scene();
    var curve = new THREE.CatmullRomCurve3( [
        new THREE.Vector2(195.233239, 332.738883),
        new THREE.Vector2(191.793067, 282.026988),
        new THREE.Vector2(187.7929, 231.356819),
        new THREE.Vector2(181.53232, 180.930289),
        new THREE.Vector2(170.392842, 131.364977),
        new THREE.Vector2(153.858594, 83.331956),
        new THREE.Vector2(130.186014, 38.47051),
        new THREE.Vector2(92.769533, 4.919646),
        new THREE.Vector2(43.925318, 7.140777),
        new THREE.Vector2(13.49091, 46.503722),
        new THREE.Vector2(2.168484, 95.931314),
        new THREE.Vector2(0.33379, 146.668111),
        new THREE.Vector2(6.431608, 197.084419),
        new THREE.Vector2(18.792286, 246.363578),
        new THREE.Vector2(35.566381, 294.319731),
        new THREE.Vector2(56.571297, 340.595604),
        new THREE.Vector2(79.64811, 385.881253),
        new THREE.Vector2(103.808069, 430.599966)
    ],false,"centripetal",0.1);

    var points = curve.getPoints(500);
    var geometry = new THREE.BufferGeometry().setFromPoints(points);

    var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

    // Create the final object to add to the scene
    var splineObject = new THREE.Line( geometry, material );
    scene.add(splineObject);
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

}

/*function animate() {

    requestAnimationFrame( animate );
    renderer.render( scene, camera );

}*/