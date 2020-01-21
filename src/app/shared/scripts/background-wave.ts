import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

export class BackgroundWave {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private loader: GLTFLoader;

  Speed = {
    SLOW: 0.005,
    FAST: 0.05,
  };

  camera: THREE.PerspectiveCamera;
  mouse = {y: 0, targetY: 0};
  container: HTMLElement;
  mainObj: THREE.Object3D;

  speedTimeout: number;

  waveColor = '#ed6b31';
  waveIntensity = 7;
  animationSpeed: number;
  savedSpeed: number;


  constructor() {
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.scene = new THREE.Scene();
    this.loader = new GLTFLoader();
    this.animationSpeed = this.Speed.FAST;
    this.savedSpeed = this.Speed.FAST;

    this.init = this.init.bind(this);
    this.animate = this.animate.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.setScene = this.setScene.bind(this);
    this.gltfLoaded = this.gltfLoaded.bind(this);
    this.setSpeed = this.setSpeed.bind(this);
    this.pause = this.pause.bind(this);
    this.pauseAbruptly = this.pauseAbruptly.bind(this);
    this.resume = this.resume.bind(this);
    this.runAtNormalSpeed = this.runAtNormalSpeed.bind(this);
    this.runAtSlowSpeed = this.runAtSlowSpeed.bind(this);
  }

  init(config: {
    targetElm: HTMLElement;
    loadCallback: any; // What to do after loading the wave
    backgroundColor: string;
    waveColor?: string;
    waveIntensity?: number
  }) {
    const {targetElm, loadCallback, backgroundColor, waveColor, waveIntensity} = config;
    this.container = targetElm;
    this.waveColor = waveColor || this.waveColor;
    this.waveIntensity = waveIntensity || this.waveIntensity;
    this.camera = new THREE.PerspectiveCamera(
      105,
      (this.container.getBoundingClientRect().width / this.container.getBoundingClientRect().height),
      0.1,
      1000
    );
    this.loader.load(
      './assets/dwave.glb',
      this.gltfLoaded,
      function(xhr) {
        if (xhr.loaded === xhr.total) {
          loadCallback();
        }
      },
      function(error) {
        console.error('A load error happened', error);
      }
    );

    this.renderer.setSize(this.container.getBoundingClientRect().width, this.container.getBoundingClientRect().height);
    this.scene.background = new THREE.Color(backgroundColor);
    targetElm.appendChild(this.renderer.domElement);

    document.body.addEventListener('mousemove', this.mouseMoveHandler);
    this.animate();
  }

  animate() {
    if (!this.animationSpeed) {
      return;
    }
    if (this.animationSpeed > 0) {
      this.mouse.y = this.mouse.targetY > this.mouse.y
        ? this.mouse.y + (this.mouse.targetY - this.mouse.y) * this.animationSpeed
        : this.mouse.y - (this.mouse.y - this.mouse.targetY) * this.animationSpeed;
      this.camera.position.set(-9.5, -1 * this.mouse.y, 0);
      this.renderer.render(this.scene, this.camera);
      try {
        this.mainObj.position.x += this.animationSpeed;
        if (this.mainObj.position.x > -10) {
          this.mainObj.position.set(-37.8, 0, 0);
        }
      } catch (e) {
      }
    }
    requestAnimationFrame(this.animate);
  }

  private resizeHandler() {
    this.camera.aspect = (this.container.getBoundingClientRect().width / this.container.getBoundingClientRect().height);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.getBoundingClientRect().width, this.container.getBoundingClientRect().height);
  }

  private mouseMoveHandler(event) {
    if (typeof event.clientY === 'undefined') {
      event.clientY = window.innerHeight / 2;
    }
    this.mouse.targetY = (event.clientY / window.innerHeight) - 0.5;
  }

  private setScene(object: THREE.Object3D) {

    this.scene.add(object);

    this.camera.lookAt(new THREE.Vector3(-2, 0, 0));
    this.camera.rotation.set(0, -1.0808390005411685, 0);

    const spotLight = new THREE.SpotLight(0xFFFFFF, this.waveIntensity, 40);
    spotLight.position.set(-15, 10, 0);
    spotLight.target.position.set(0, -10, -4);
    this.scene.add(spotLight.target);
    spotLight.angle = .45;
    spotLight.penumbra = 0.85;
    spotLight.shadow.mapSize.width = 0;
    spotLight.shadow.mapSize.width = 0;
    this.scene.add(spotLight);

    object.scale.x = 55;
    object.scale.y = 55;
    object.scale.z = 55;
    object.position.set(0, -40, 0);
    object.rotation.set(-0.85, 0, 0);

    const group = new THREE.Group();
    group.add(object);
    this.scene.add(group);

    group.rotation.set(-0.8, -2.6, -0.8);
    group.position.set(1.5, 0, 0);
    this.mainObj = object;
    this.mainObj.position.set(-9.2, 0, 0);
    window.addEventListener('resize', this.resizeHandler);
    document.addEventListener('mousemove', this.mouseMoveHandler, false);
    document.dispatchEvent(new Event('mousemove'));
  }

  private gltfLoaded(gltf: GLTF) {
    const object = gltf.scene.children[0];
    object.traverse((child: THREE.Mesh) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.computeBoundingBox();
        const material = new THREE.MeshStandardMaterial();
        material.color.set(this.waveColor);
        material.emissiveIntensity = 0.1;
        material.refractionRatio = 1;
        material.roughness = 0.8;
        material.blending = THREE.CustomBlending;
        material.blendSrc = THREE.SrcColorFactor;
        material.blendDst = THREE.DstAlphaFactor;

        material.blendEquation = THREE.AddEquation;
        material.premultipliedAlpha = false;
        child.material = material;
      }
    });
    this.setScene(object);
  }

  private setSpeed(targetSpeed, slowDown) {
    if (this.animationSpeed > targetSpeed + 0.01 && slowDown) {
      this.animationSpeed = this.animationSpeed - (this.animationSpeed - targetSpeed) / 15;
      this.speedTimeout = setTimeout(this.setSpeed, 60, targetSpeed, slowDown);
    } else if (this.animationSpeed < targetSpeed - 0.01 && !slowDown) {
      if (this.animationSpeed === 0) {
        this.animationSpeed = 0.0001;
      }
      this.animationSpeed = this.animationSpeed + (this.animationSpeed * 0.15);
      this.speedTimeout = setTimeout(this.setSpeed, 60, targetSpeed, slowDown);
    } else {
      this.animationSpeed = targetSpeed;
    }
  }

  pause() {
    this.savedSpeed = this.animationSpeed;
    clearTimeout(this.speedTimeout);
    this.setSpeed(0, true);
  }

  pauseAbruptly() {
    clearTimeout(this.speedTimeout);
    this.animationSpeed = 0;
  }

  resume() {
    clearTimeout(this.speedTimeout);
    this.setSpeed(this.savedSpeed, false);
  }

  runAtNormalSpeed() {
    clearTimeout(this.speedTimeout);
    this.setSpeed(this.Speed.FAST, this.Speed.FAST < this.animationSpeed);
  }

  runAtSlowSpeed() {
    clearTimeout(this.speedTimeout);
    this.setSpeed(this.Speed.SLOW, false);
  }
}
