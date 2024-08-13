let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();

renderer.setClearColor(0x000000)
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("scene").appendChild(renderer.domElement);
camera.position.set(0, 2, 3);

let loader = new THREE.GLTFLoader();
let model;
loader.load('train.glb', function(gltf){
    model = gltf.scene;

    model.position.y = -0.5;
    scene.add(model);
});

let ambient = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient);

let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.enableZoom = false;
controls.enableDamping = true;
controls.dampingFactor = 0.07;

function render(){
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    controls.update();

    model.rotation.y -= 0.005;
}

render();