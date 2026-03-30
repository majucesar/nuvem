import { Reflector } from 'three/examples/jsm/objects/Reflector.js';

// 1. Criar a geometria do chão
const groundGeometry = new THREE.PlaneGeometry(20, 20);

// 2. Criar o Reflector (o "espelho")
const groundMirror = new Reflector(groundGeometry, {
    clipBias: 0.003,
    textureWidth: window.innerWidth * window.devicePixelRatio,
    textureHeight: window.innerHeight * window.devicePixelRatio,
    color: 0x888888 // Cor do reflexo (use tons de cinza para controlar a intensidade)
});

// 3. Posicionar e rotacionar para ficar horizontal
groundMirror.position.y = 0;
groundMirror.rotation.x = -Math.PI / 2; 

scene.add(groundMirror);