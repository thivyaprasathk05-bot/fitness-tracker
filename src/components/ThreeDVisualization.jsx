import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeDVisualization({ stats }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create animated body visualization
    const group = new THREE.Group();
    scene.add(group);

    // Head (sphere)
    const headGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      emissive: 0x1e40af,
      shininess: 100,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.2;
    group.add(head);

    // Torso (cylinder)
    const torsoGeometry = new THREE.CylinderGeometry(0.25, 0.3, 0.8, 32);
    const torsoMaterial = new THREE.MeshPhongMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
    });
    const torso = new THREE.Mesh(torsoGeometry, torsoMaterial);
    torso.position.y = 0.4;
    group.add(torso);

    // Left arm
    const armGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 32);
    const armMaterial = new THREE.MeshPhongMaterial({
      color: 0x10b981,
      emissive: 0x059669,
    });
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.6, 0.8, 0);
    leftArm.rotation.z = Math.PI / 4;
    group.add(leftArm);

    // Right arm
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.6, 0.8, 0);
    rightArm.rotation.z = -Math.PI / 4;
    group.add(rightArm);

    // Left leg
    const legGeometry = new THREE.CylinderGeometry(0.12, 0.1, 0.8, 32);
    const legMaterial = new THREE.MeshPhongMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
    });
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.2, -0.8, 0);
    group.add(leftLeg);

    // Right leg
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.2, -0.8, 0);
    group.add(rightLeg);

    // Lighting
    const light1 = new THREE.PointLight(0x3b82f6, 1.5, 100);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xec4899, 1, 100);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotation based on stats
      const calorieRotation = (stats.calories / 2500) * Math.PI * 2;
      const heartRateRotation = (stats.heartRate / 200) * Math.PI;
      
      group.rotation.x = Math.sin(Date.now() * 0.0005) * 0.3 + heartRateRotation * 0.1;
      group.rotation.y = calorieRotation + Date.now() * 0.0003;
      group.rotation.z = Math.cos(Date.now() * 0.0005) * 0.2;

      // Bobbing animation
      group.position.y = Math.sin(Date.now() * 0.001) * 0.2;

      // Arm animation based on steps
      const stepAnimation = (stats.steps / 10000) * Math.PI;
      leftArm.rotation.z = Math.PI / 4 + Math.sin(stepAnimation + Date.now() * 0.003) * 0.5;
      rightArm.rotation.z = -Math.PI / 4 + Math.sin(stepAnimation + Date.now() * 0.003 + Math.PI) * 0.5;

      // Leg animation
      leftLeg.rotation.z = Math.sin(stepAnimation + Date.now() * 0.003) * 0.3;
      rightLeg.rotation.z = Math.sin(stepAnimation + Date.now() * 0.003 + Math.PI) * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [stats]);

  return <div ref={mountRef} style={{ width: '100%', height: '400px' }} />;
}
