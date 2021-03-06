import * as THREE from "../node_modules/three/build/three.module.js";

// Get the div to put the rendering in:
var container = document.getElementById('canvas');

// Scene
const scene = new THREE.Scene();

// Add a cube to the scene
const geometry = new THREE.ConeGeometry(3, 10, 30); // width, height, depth
const material = new THREE.MeshLambertMaterial({ color: 0xfb8e00 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0);
scene.add(mesh);

// Set up lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(10, 20, 0); // x, y, z
scene.add(directionalLight);

// Camera
const width = 10;
const height = width * (window.innerHeight / window.innerWidth);
const camera = new THREE.OrthographicCamera(
  width / -1, // left
  width / 1, // right
  height / 1, // top
  height / -1, // bottom
  1, // near
  100 // far
);

camera.position.set(4, 4, 1);
camera.lookAt(0, 0, 0);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(400, 300);
renderer.render(scene, camera);

// Add it to HTML
container.appendChild(renderer.domElement);