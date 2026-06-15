import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// ── Shaders ─────────────────────────────────────────────────────────
// Vertex: sum a few directional sine waves to swell the plane.
const vertex = /* glsl */ `
  uniform float uTime;
  varying float vH;
  varying vec2 vUv;

  float wave(vec2 p, vec2 dir, float freq, float speed, float amp){
    return sin(dot(p, dir) * freq + uTime * speed) * amp;
  }

  void main(){
    vUv = uv;
    vec3 pos = position;
    float h = 0.0;
    h += wave(pos.xy, normalize(vec2( 1.0, 0.30)), 0.35, 0.55, 0.55);
    h += wave(pos.xy, normalize(vec2(-0.40, 1.00)), 0.62, 0.85, 0.26);
    h += wave(pos.xy, normalize(vec2( 0.80,-0.60)), 1.10, 1.25, 0.13);
    pos.z += h;
    vH = h;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

// Fragment: deep ink → steel by crest height, with a bronze glint pooled
// toward a virtual sun near the far horizon.
const fragment = /* glsl */ `
  uniform vec3 uDeep;
  uniform vec3 uSteel;
  uniform vec3 uBronze;
  varying float vH;
  varying vec2 vUv;

  void main(){
    float t = smoothstep(-0.8, 0.9, vH);
    vec3 col = mix(uDeep, uSteel, t);

    float crest = smoothstep(0.50, 0.95, vH);
    float sun   = smoothstep(0.62, 0.0, distance(vUv, vec2(0.5, 0.16)));
    col += uBronze * crest * sun * 0.9;

    float depth = smoothstep(0.0, 0.35, vUv.y);
    col = mix(uDeep * 0.6, col, depth);

    gl_FragColor = vec4(col, 1.0);
  }
`

export default function Ocean() {
  const matRef = useRef()

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uDeep: { value: new THREE.Color('#05090f') },
      uSteel: { value: new THREE.Color('#3e5a78') },
      uBronze: { value: new THREE.Color('#e6c98a') },
    }),
    []
  )

  useFrame((_, delta) => {
    if (matRef.current) matRef.current.uniforms.uTime.value += delta
  })

  return (
    <mesh rotation={[-Math.PI / 2.18, 0, 0]} position={[0, -1.1, 0]}>
      <planeGeometry args={[46, 46, 180, 180]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
      />
    </mesh>
  )
}
