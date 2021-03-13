import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

(async () => {
  const scene = new Scene();

  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();
  const mtl = await mtlLoader.loadAsync("./static/machine.mtl");
  // objLoader.setMaterials(mtl);
  const obj = await objLoader.loadAsync("./static/machine.obj");
  obj.rotation.y = 6;
  scene.add(obj);

  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 10;
  camera.position.y = 3.5;

  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff);
  document.body.appendChild(renderer.domElement);

  const animate = () => {
    window.requestAnimationFrame(animate);
    obj.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
})();
