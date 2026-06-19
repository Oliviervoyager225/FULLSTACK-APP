import { useEffect, useRef } from 'react';
import {
  Vector3 as a,
  MeshPhysicalMaterial as c,
  InstancedMesh as d,
  Clock as e,
  AmbientLight as f,
  SphereGeometry as g,
  ShaderChunk as h,
  Scene as i,
  Color as l,
  Object3D as m,
  SRGBColorSpace as n,
  MathUtils as o,
  PMREMGenerator as p,
  Vector2 as r,
  WebGLRenderer as s,
  PerspectiveCamera as t,
  PointLight as u,
  ACESFilmicToneMapping as v,
  Plane as w,
  Raycaster as y
} from 'three';
import { RoomEnvironment as z } from 'three/examples/jsm/environments/RoomEnvironment.js';

class ThreeApp {
  #e; canvas; camera; cameraMinAspect; cameraMaxAspect; cameraFov; maxPixelRatio; minPixelRatio;
  scene; renderer; #t;
  size = { width: 0, height: 0, wWidth: 0, wHeight: 0, ratio: 0, pixelRatio: 0 };
  render = this.#i; onBeforeRender = () => {}; onAfterRender = () => {}; onAfterResize = () => {};
  #s = false; #n = false; isDisposed = false; #o; #r; #a; #c = new e(); #h = { elapsed: 0, delta: 0 }; #l;
  constructor(e) { this.#e = { ...e }; this.#m(); this.#d(); this.#p(); this.resize(); this.#g(); }
  #m() { this.camera = new t(); this.cameraFov = this.camera.fov; }
  #d() { this.scene = new i(); }
  #p() {
    if (this.#e.canvas) { this.canvas = this.#e.canvas; }
    else if (this.#e.id) { this.canvas = document.getElementById(this.#e.id); }
    else { console.error('Three: Missing canvas or id parameter'); }
    this.canvas.style.display = 'block';
    const e = { canvas: this.canvas, powerPreference: 'high-performance', ...(this.#e.rendererOptions ?? {}) };
    this.renderer = new s(e); this.renderer.outputColorSpace = n;
  }
  #g() {
    if (!(this.#e.size instanceof Object)) {
      window.addEventListener('resize', this.#f.bind(this));
      if (this.#e.size === 'parent' && this.canvas.parentNode) {
        this.#r = new ResizeObserver(this.#f.bind(this)); this.#r.observe(this.canvas.parentNode);
      }
    }
    this.#o = new IntersectionObserver(this.#u.bind(this), { root: null, rootMargin: '0px', threshold: 0 });
    this.#o.observe(this.canvas);
    document.addEventListener('visibilitychange', this.#v.bind(this));
  }
  #y() { window.removeEventListener('resize', this.#f.bind(this)); this.#r?.disconnect(); this.#o?.disconnect(); document.removeEventListener('visibilitychange', this.#v.bind(this)); }
  #u(e) { this.#s = e[0].isIntersecting; this.#s ? this.#w() : this.#z(); }
  #v() { if (this.#s) { document.hidden ? this.#z() : this.#w(); } }
  #f() { if (this.#a) clearTimeout(this.#a); this.#a = setTimeout(this.resize.bind(this), 100); }
  resize() {
    let e, t2;
    if (this.#e.size instanceof Object) { e = this.#e.size.width; t2 = this.#e.size.height; }
    else if (this.#e.size === 'parent' && this.canvas.parentNode) { e = this.canvas.parentNode.offsetWidth; t2 = this.canvas.parentNode.offsetHeight; }
    else { e = window.innerWidth; t2 = window.innerHeight; }
    this.size.width = e; this.size.height = t2; this.size.ratio = e / t2;
    this.#x(); this.#b(); this.onAfterResize(this.size);
  }
  #x() {
    this.camera.aspect = this.size.width / this.size.height;
    if (this.camera.isPerspectiveCamera && this.cameraFov) {
      if (this.cameraMinAspect && this.camera.aspect < this.cameraMinAspect) { this.#A(this.cameraMinAspect); }
      else if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) { this.#A(this.cameraMaxAspect); }
      else { this.camera.fov = this.cameraFov; }
    }
    this.camera.updateProjectionMatrix(); this.updateWorldSize();
  }
  #A(e) { const t2 = Math.tan(o.degToRad(this.cameraFov / 2)) / (this.camera.aspect / e); this.camera.fov = 2 * o.radToDeg(Math.atan(t2)); }
  updateWorldSize() {
    if (this.camera.isPerspectiveCamera) {
      const e = (this.camera.fov * Math.PI) / 180;
      this.size.wHeight = 2 * Math.tan(e / 2) * this.camera.position.length();
      this.size.wWidth = this.size.wHeight * this.camera.aspect;
    } else if (this.camera.isOrthographicCamera) {
      this.size.wHeight = this.camera.top - this.camera.bottom;
      this.size.wWidth = this.camera.right - this.camera.left;
    }
  }
  #b() {
    this.renderer.setSize(this.size.width, this.size.height); this.#t?.setSize(this.size.width, this.size.height);
    let e = window.devicePixelRatio;
    if (this.maxPixelRatio && e > this.maxPixelRatio) e = this.maxPixelRatio;
    else if (this.minPixelRatio && e < this.minPixelRatio) e = this.minPixelRatio;
    this.renderer.setPixelRatio(e); this.size.pixelRatio = e;
  }
  get postprocessing() { return this.#t; }
  set postprocessing(e) { this.#t = e; this.render = e.render.bind(e); }
  #w() {
    if (this.#n) return;
    const animate = () => {
      this.#l = requestAnimationFrame(animate); this.#h.delta = this.#c.getDelta(); this.#h.elapsed += this.#h.delta;
      this.onBeforeRender(this.#h); this.render(); this.onAfterRender(this.#h);
    };
    this.#n = true; this.#c.start(); animate();
  }
  #z() { if (this.#n) { cancelAnimationFrame(this.#l); this.#n = false; this.#c.stop(); } }
  #i() { this.renderer.render(this.scene, this.camera); }
  clear() {
    this.scene.traverse(e => {
      if (e.isMesh && typeof e.material === 'object' && e.material !== null) {
        Object.keys(e.material).forEach(t2 => { const i2 = e.material[t2]; if (i2 !== null && typeof i2 === 'object' && typeof i2.dispose === 'function') i2.dispose(); });
        e.material.dispose(); e.geometry.dispose();
      }
    }); this.scene.clear();
  }
  dispose() { this.#y(); this.#z(); this.clear(); this.#t?.dispose(); this.renderer.dispose(); this.renderer.forceContextLoss(); this.isDisposed = true; }
}

const pointerMap = new Map(), pointerPos = new r();
let pointerListening = false;
function addPointer(e) {
  const t2 = { position: new r(), nPosition: new r(), hover: false, touching: false, onEnter() {}, onMove() {}, onClick() {}, onLeave() {}, ...e };
  if (!pointerMap.has(e.domElement)) {
    pointerMap.set(e.domElement, t2);
    if (!pointerListening) {
      document.body.addEventListener('pointermove', onPointerMove);
      document.body.addEventListener('pointerleave', onPointerLeave);
      document.body.addEventListener('click', onPointerClick);
      document.body.addEventListener('touchstart', onTouchStart, { passive: false });
      document.body.addEventListener('touchmove', onTouchMove, { passive: false });
      document.body.addEventListener('touchend', onTouchEnd, { passive: false });
      document.body.addEventListener('touchcancel', onTouchEnd, { passive: false });
      pointerListening = true;
    }
  }
  t2.dispose = () => {
    pointerMap.delete(e.domElement);
    if (pointerMap.size === 0) {
      document.body.removeEventListener('pointermove', onPointerMove);
      document.body.removeEventListener('pointerleave', onPointerLeave);
      document.body.removeEventListener('click', onPointerClick);
      document.body.removeEventListener('touchstart', onTouchStart);
      document.body.removeEventListener('touchmove', onTouchMove);
      document.body.removeEventListener('touchend', onTouchEnd);
      document.body.removeEventListener('touchcancel', onTouchEnd);
      pointerListening = false;
    }
  };
  return t2;
}
function onPointerMove(e) { pointerPos.x = e.clientX; pointerPos.y = e.clientY; processPointer(); }
function processPointer() {
  for (const [elem, t2] of pointerMap) {
    const rect = elem.getBoundingClientRect();
    if (isInRect(rect)) {
      updatePos(t2, rect); if (!t2.hover) { t2.hover = true; t2.onEnter(t2); } t2.onMove(t2);
    } else if (t2.hover && !t2.touching) { t2.hover = false; t2.onLeave(t2); }
  }
}
function onPointerClick(e) {
  pointerPos.x = e.clientX; pointerPos.y = e.clientY;
  for (const [elem, t2] of pointerMap) { const rect = elem.getBoundingClientRect(); updatePos(t2, rect); if (isInRect(rect)) t2.onClick(t2); }
}
function onPointerLeave() { for (const t2 of pointerMap.values()) { if (t2.hover) { t2.hover = false; t2.onLeave(t2); } } }
function onTouchStart(e) {
  if (e.touches.length > 0) {
    e.preventDefault(); pointerPos.x = e.touches[0].clientX; pointerPos.y = e.touches[0].clientY;
    for (const [elem, t2] of pointerMap) { const rect = elem.getBoundingClientRect(); if (isInRect(rect)) { t2.touching = true; updatePos(t2, rect); if (!t2.hover) { t2.hover = true; t2.onEnter(t2); } t2.onMove(t2); } }
  }
}
function onTouchMove(e) {
  if (e.touches.length > 0) {
    e.preventDefault(); pointerPos.x = e.touches[0].clientX; pointerPos.y = e.touches[0].clientY;
    for (const [elem, t2] of pointerMap) { const rect = elem.getBoundingClientRect(); updatePos(t2, rect); if (isInRect(rect)) { if (!t2.hover) { t2.hover = true; t2.touching = true; t2.onEnter(t2); } t2.onMove(t2); } else if (t2.hover && t2.touching) { t2.onMove(t2); } }
  }
}
function onTouchEnd() { for (const [, t2] of pointerMap) { if (t2.touching) { t2.touching = false; if (t2.hover) { t2.hover = false; t2.onLeave(t2); } } } }
function updatePos(e, t2) { const { position: i2, nPosition: s2 } = e; i2.x = pointerPos.x - t2.left; i2.y = pointerPos.y - t2.top; s2.x = (i2.x / t2.width) * 2 - 1; s2.y = (-i2.y / t2.height) * 2 + 1; }
function isInRect(e) { const { x: t2, y: i2 } = pointerPos; const { left: s2, top: n2, width: o2, height: r2 } = e; return t2 >= s2 && t2 <= s2 + o2 && i2 >= n2 && i2 <= n2 + r2; }

const { randFloat: k, randFloatSpread: E } = o;
const vA = new a(), vB = new a(), vC = new a(), vD = new a(), vE = new a(), vF = new a(), vG = new a(), vH = new a(), vI = new a(), vJ = new a();

class Physics {
  constructor(e) {
    this.config = e;
    this.positionData = new Float32Array(3 * e.count).fill(0);
    this.velocityData = new Float32Array(3 * e.count).fill(0);
    this.sizeData = new Float32Array(e.count).fill(1);
    this.center = new a();
    this.#init(); this.setSizes();
  }
  #init() {
    const { config: e, positionData: t2 } = this;
    this.center.toArray(t2, 0);
    for (let i2 = 1; i2 < e.count; i2++) { const s2 = 3 * i2; t2[s2] = E(2 * e.maxX); t2[s2 + 1] = E(2 * e.maxY); t2[s2 + 2] = E(2 * e.maxZ); }
  }
  setSizes() {
    const { config: e, sizeData: t2 } = this;
    t2[0] = e.size0;
    for (let i2 = 1; i2 < e.count; i2++) t2[i2] = k(e.minSize, e.maxSize);
  }
  update(e) {
    const { config: t2, center: i2, positionData: s2, sizeData: n2, velocityData: o2 } = this;
    let r2 = 0;
    if (t2.controlSphere0) { r2 = 1; vA.fromArray(s2, 0); vA.lerp(i2, 0.1).toArray(s2, 0); vD.set(0,0,0).toArray(o2, 0); }
    for (let idx = r2; idx < t2.count; idx++) {
      const base = 3 * idx; vB.fromArray(s2, base); vE.fromArray(o2, base);
      vE.y -= e.delta * t2.gravity * n2[idx]; vE.multiplyScalar(t2.friction); vE.clampLength(0, t2.maxVelocity);
      vB.add(vE); vB.toArray(s2, base); vE.toArray(o2, base);
    }
    for (let idx = r2; idx < t2.count; idx++) {
      const base = 3 * idx; vB.fromArray(s2, base); vE.fromArray(o2, base); const radius = n2[idx];
      for (let jdx = idx + 1; jdx < t2.count; jdx++) {
        const otherBase = 3 * jdx; vC.fromArray(s2, otherBase); vF.fromArray(o2, otherBase); const otherRadius = n2[jdx];
        vG.copy(vC).sub(vB); const dist = vG.length(); const sumRadius = radius + otherRadius;
        if (dist < sumRadius) {
          const overlap = sumRadius - dist; vH.copy(vG).normalize().multiplyScalar(0.5 * overlap);
          vI.copy(vH).multiplyScalar(Math.max(vE.length(), 1)); vJ.copy(vH).multiplyScalar(Math.max(vF.length(), 1));
          vB.sub(vH); vE.sub(vI); vB.toArray(s2, base); vE.toArray(o2, base);
          vC.add(vH); vF.add(vJ); vC.toArray(s2, otherBase); vF.toArray(o2, otherBase);
        }
      }
      if (t2.controlSphere0) {
        vG.copy(vA).sub(vB); const dist = vG.length(); const sumRadius0 = radius + n2[0];
        if (dist < sumRadius0) { const diff = sumRadius0 - dist; vH.copy(vG.normalize()).multiplyScalar(diff); vI.copy(vH).multiplyScalar(Math.max(vE.length(), 2)); vB.sub(vH); vE.sub(vI); }
      }
      if (Math.abs(vB.x) + radius > t2.maxX) { vB.x = Math.sign(vB.x) * (t2.maxX - radius); vE.x = -vE.x * t2.wallBounce; }
      if (t2.gravity === 0) { if (Math.abs(vB.y) + radius > t2.maxY) { vB.y = Math.sign(vB.y) * (t2.maxY - radius); vE.y = -vE.y * t2.wallBounce; } }
      else if (vB.y - radius < -t2.maxY) { vB.y = -t2.maxY + radius; vE.y = -vE.y * t2.wallBounce; }
      const maxBoundary = Math.max(t2.maxZ, t2.maxSize);
      if (Math.abs(vB.z) + radius > maxBoundary) { vB.z = Math.sign(vB.z) * (t2.maxZ - radius); vE.z = -vE.z * t2.wallBounce; }
      vB.toArray(s2, base); vE.toArray(o2, base);
    }
  }
}

class SubsurfaceMaterial extends c {
  constructor(e) {
    super(e);
    this.uniforms = { thicknessDistortion: { value: 0.1 }, thicknessAmbient: { value: 0 }, thicknessAttenuation: { value: 0.1 }, thicknessPower: { value: 2 }, thicknessScale: { value: 10 } };
    this.defines.USE_UV = '';
    this.onBeforeCompile = e => {
      Object.assign(e.uniforms, this.uniforms);
      e.fragmentShader = '\n        uniform float thicknessPower;\n        uniform float thicknessScale;\n        uniform float thicknessDistortion;\n        uniform float thicknessAmbient;\n        uniform float thicknessAttenuation;\n      ' + e.fragmentShader;
      e.fragmentShader = e.fragmentShader.replace('void main() {', '\n        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {\n          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));\n          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;\n          #ifdef USE_COLOR\n            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;\n          #else\n            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;\n          #endif\n          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;\n        }\n\n        void main() {\n      ');
      const t2 = h.lights_fragment_begin.replaceAll('RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );', '\n          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);\n        ');
      e.fragmentShader = e.fragmentShader.replace('#include <lights_fragment_begin>', t2);
      if (this.onBeforeCompile2) this.onBeforeCompile2(e);
    };
  }
}

const defaultConfig = { count: 200, colors: [0, 0, 0], ambientColor: 16777215, ambientIntensity: 1, lightIntensity: 200, materialParams: { metalness: 0.5, roughness: 0.5, clearcoat: 1, clearcoatRoughness: 0.15 }, minSize: 0.5, maxSize: 1, size0: 1, gravity: 0.5, friction: 0.9975, wallBounce: 0.95, maxVelocity: 0.15, maxX: 5, maxY: 5, maxZ: 2, controlSphere0: false, followCursor: true };
const dummy = new m();

class BallpitMesh extends d {
  constructor(e, t2 = {}) {
    const i2 = { ...defaultConfig, ...t2 };
    const s2 = new z(); const n2 = new p(e, 0.04).fromScene(s2).texture;
    const o2 = new g(); const r2 = new SubsurfaceMaterial({ envMap: n2, ...i2.materialParams });
    r2.envMapRotation.x = -Math.PI / 2;
    super(o2, r2, i2.count);
    this.config = i2; this.physics = new Physics(i2); this.#setup(); this.setColors(i2.colors);
  }
  #setup() { this.ambientLight = new f(this.config.ambientColor, this.config.ambientIntensity); this.add(this.ambientLight); this.light = new u(this.config.colors[0], this.config.lightIntensity); this.add(this.light); }
  setColors(e) {
    if (Array.isArray(e) && e.length > 1) {
      const palette = (() => {
        let colors, colorObjs;
        function set(e) { colors = e; colorObjs = e.map(c2 => new l(c2)); }
        set(e);
        return { set, getAt: function(ratio, out = new l()) { const scaled = Math.max(0, Math.min(1, ratio)) * (colors.length - 1); const idx = Math.floor(scaled); const start = colorObjs[idx]; if (idx >= colors.length - 1) return start.clone(); const alpha = scaled - idx; const end = colorObjs[idx + 1]; out.r = start.r + alpha * (end.r - start.r); out.g = start.g + alpha * (end.g - start.g); out.b = start.b + alpha * (end.b - start.b); return out; } };
      })();
      for (let idx = 0; idx < this.count; idx++) { this.setColorAt(idx, palette.getAt(idx / this.count)); if (idx === 0) this.light.color.copy(palette.getAt(idx / this.count)); }
      this.instanceColor.needsUpdate = true;
    }
  }
  update(e) {
    this.physics.update(e);
    for (let idx = 0; idx < this.count; idx++) {
      dummy.position.fromArray(this.physics.positionData, 3 * idx);
      if (idx === 0 && this.config.followCursor === false) dummy.scale.setScalar(0);
      else dummy.scale.setScalar(this.physics.sizeData[idx]);
      dummy.updateMatrix(); this.setMatrixAt(idx, dummy.matrix);
      if (idx === 0) this.light.position.copy(dummy.position);
    }
    this.instanceMatrix.needsUpdate = true;
  }
}

function createBallpit(canvas, opts = {}) {
  const app = new ThreeApp({ canvas, size: 'parent', rendererOptions: { antialias: true, alpha: true } });
  let spheres;
  app.renderer.toneMapping = v;
  app.camera.position.set(0, 0, 20);
  app.camera.lookAt(0, 0, 0);
  app.cameraMaxAspect = 1.5;
  app.resize();
  init(opts);
  const raycaster = new y(); const plane = new w(new a(0, 0, 1), 0); const point = new a();
  let paused = false;
  canvas.style.touchAction = 'none'; canvas.style.userSelect = 'none'; canvas.style.webkitUserSelect = 'none';
  const pointer = addPointer({ domElement: canvas,
    onMove() { raycaster.setFromCamera(pointer.nPosition, app.camera); app.camera.getWorldDirection(plane.normal); raycaster.ray.intersectPlane(plane, point); spheres.physics.center.copy(point); spheres.config.controlSphere0 = true; },
    onLeave() { spheres.config.controlSphere0 = false; }
  });
  function init(e) { if (spheres) { app.clear(); app.scene.remove(spheres); } spheres = new BallpitMesh(app.renderer, e); app.scene.add(spheres); }
  app.onBeforeRender = e => { if (!paused) spheres.update(e); };
  app.onAfterResize = e => { spheres.config.maxX = e.wWidth / 2; spheres.config.maxY = e.wHeight / 2; };
  return { three: app, get spheres() { return spheres; }, setCount(e) { init({ ...spheres.config, count: e }); }, togglePause() { paused = !paused; }, dispose() { pointer.dispose(); app.dispose(); } };
}

const Ballpit = ({ className = '', followCursor = true, ...props }) => {
  const canvasRef = useRef(null);
  const instanceRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    instanceRef.current = createBallpit(canvas, { followCursor, ...props });
    return () => { instanceRef.current?.dispose(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <canvas className={className} ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default Ballpit;
