import {
  Suspense,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
} from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import type { ProjectMeta } from '../data/projects';
import { projects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery';

type OrbitCardProps = {
  project: ProjectMeta;
  position: [number, number, number];
  occluder: MutableRefObject<THREE.Object3D>;
  onOpen: (project: ProjectMeta) => void;
  onHover: (hovered: boolean) => void;
};

function OrbitCard({
  project,
  position,
  occluder,
  onOpen,
  onHover,
}: OrbitCardProps) {
  const { content } = useLanguage();
  const item = content.projects.items[project.id];

  return (
    <Html
      position={position}
      center
      occlude={[occluder]}
      zIndexRange={[40, 0]}
      style={{ pointerEvents: 'auto' }}
    >
      <button
        type="button"
        className={`orbit-card orbit-card--${project.tone}`}
        onClick={() => onOpen(project)}
        onPointerEnter={() => onHover(true)}
        onPointerLeave={() => onHover(false)}
        aria-label={`${project.name} — ${item.category}`}
      >
        <span className="orbit-card__number">{project.number}</span>
        <span className="orbit-card__title">{project.name}</span>
        <span className="orbit-card__category">{item.category}</span>
        <span className="orbit-card__stack">
          {project.stack.slice(0, 3).join(' · ')}
        </span>
        <span className="orbit-card__cta">
          {content.projects.viewCase} →
        </span>
      </button>
    </Html>
  );
}

function Starfield() {
  const geometry = useMemo(() => {
    const count = 400;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 5 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const buffer = new THREE.BufferGeometry();
    buffer.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return buffer;
  }, []);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        color="#c19a6b"
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
}

function spherePoint(
  index: number,
  total: number,
  radius: number,
): [number, number, number] {
  const y = 1 - (index / (total - 1)) * 2;
  const radiusAtY = Math.sqrt(1 - y * y);
  const theta = index * Math.PI * (3 - Math.sqrt(5));
  return [
    Math.cos(theta) * radiusAtY * radius,
    y * radius,
    Math.sin(theta) * radiusAtY * radius,
  ];
}

function OrbitScene({
  onOpen,
  reducedMotion,
}: {
  onOpen: (project: ProjectMeta) => void;
  reducedMotion: boolean;
}) {
  const occluder = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <mesh ref={occluder}>
        <sphereGeometry args={[2.55, 48, 48]} />
        <meshBasicMaterial color="#211d1a" />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.65, 32, 32]} />
        <meshBasicMaterial
          color="#c19a6b"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      <Starfield />

      {projects.map((project, index) => (
        <OrbitCard
          key={project.id}
          project={project}
          position={spherePoint(index, projects.length, 3.4)}
          occluder={occluder}
          onOpen={onOpen}
          onHover={(value) => setHovered(value)}
        />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!reducedMotion && !hovered}
        autoRotateSpeed={0.6}
        enableDamping
        dampingFactor={0.08}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.55}
      />
    </>
  );
}

export default function ProjectOrbit({
  onOpen,
}: {
  onOpen: (project: ProjectMeta) => void;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <OrbitScene onOpen={onOpen} reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}
