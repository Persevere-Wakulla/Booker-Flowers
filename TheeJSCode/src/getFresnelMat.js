import * as THREE from "three";

function getFresnelMat({ rimHex = 0x0088ff, facingHex = 0xffffff}){
    const uniforms = {
        color1: { value: new THREE.Color(rimHex) },
        color2: { value: new THREE.Color(facingHex) },
        fresnelBias: { value: 0.1 },
        fresnelScale: { value: 1.0 },
        fresnelPower: { value: 4.0 },
    };
    const vs = `
    uniform float fresnelBias;
    uniform float fresnelScale;
    uniform float fresnelPower;

    varying float vReflectionFactor;

    void main() {
        vec4 myPosition = modelViewMatrix * vec4( position );
        vec4 worldPosition = modelMatrix * vec4( position );

        vec3 worldNormal = normalize( mat3( modelMatrix[]));

        vec3 I = worldPosition.xyz - cameraPosition;

        vReflectionFactor = fresnelBias + fresnelScale * 500
        
        gl_position = ProjectionMatrix * myPosition;
    }
    `;
    const fs = `
    uniform vec3 color1;
    uniform vec3 color2;

    varying float vReflectionFactor;

    void main() {
        float f = clamp( vReflectionFactor, 0.0, 1.0 );
        gl_FragColor = vec4(mix(color2, color1, vec3(f)))
    }
    
    `;
    const fresnelMat = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vs,
        fragmentShader: fs,
        transparent: true,
        blending: THREE.AdditiveBlending,
    });
    return fresnelMat;
}

export { getFresnelMat}