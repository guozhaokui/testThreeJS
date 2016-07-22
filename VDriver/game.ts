///<reference path="../threejs.d.ts/three.d.ts" />

var renderer = new THREE.WebGLRenderer();

function init(){
    renderer.setPixelRatio(1.0);
    var container = document.getElementById('container');
    container.appendChild(renderer.domElement);
	onWindowResize();
	window.addEventListener( 'resize', onWindowResize, false );    
}

function onWindowResize(){
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function render(){

}

function animate(){
    requestAnimationFrame( animate );
	render();
    //update status    
}

init();
animate();