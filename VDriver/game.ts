///<reference path="../threejs.d.ts/three.d.ts" />

var renderer = new THREE.WebGLRenderer();

function init() {
    renderer.setPixelRatio(1.0);
    var container = document.getElementById('container');
    container.appendChild(renderer.domElement);
    onWindowResize();
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
}

class City {
    width = 2000;
    height = 2000;
    //point=10m
    constructor() {

    }
    load(url: string) {

    }
}

var tex1 = THREE.ImageUtils.loadTexture('assets/envmap.png');

var scene = new THREE.Scene();
var geo1 = new THREE.BoxGeometry(10, 10, 40);
var mtl1 = new THREE.MeshBasicMaterial({ color: 0xffffff, map:tex1});
var mesh1 = new THREE.Mesh(geo1, mtl1);
scene.add(mesh1);

var cam1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
cam1.position.z = 100;

var vrcam = new THREE.StereoCamera();
vrcam.aspect = 0.5;
var vr = true;

class Car extends THREE.Object3D{
    vel=new THREE.Vector2(0,0);
    acc=0.0;
    dir=0.0;
    constructor(){
        super();
        this.position.x=this.position.y=this.position.z=0;
    }
    opAcc(v:number){

    }
    opBrake(v:number){

    }
    opSteel(deg:number){
        
    }
}

function render(cam: THREE.PerspectiveCamera) {
    scene.updateMatrixWorld(false);
    if (cam.parent === null) cam.updateMatrixWorld(false);

    if (vr) {
        vrcam.update(cam);
        var size = renderer.getSize();
        renderer.setScissorTest( true );
        renderer.clear();
        renderer.setScissor( 0, 0, size.width / 2, size.height );
        renderer.setViewport(0, 0, size.width / 2, size.height);
        renderer.render(scene, vrcam.cameraL);

        renderer.setScissor(size.width / 2, 0, size.width / 2, size.height);
        renderer.setViewport(size.width / 2, 0, size.width / 2, size.height);
        renderer.render(scene, vrcam.cameraR);
        renderer.setScissorTest(false);
    } else {
        renderer.render(scene, cam1);
    }
}

function animate() {
    requestAnimationFrame(animate);
    render(cam1);
    //update status    
}

init();
animate();