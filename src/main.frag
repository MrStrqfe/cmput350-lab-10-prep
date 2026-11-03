#version 120 // glsl version 1.2 for OpenGL 2.1

uniform vec2 windowSize;

void main(void) {
    vec2 uv = gl_FragCoord.xy / windowSize;
    // BL: black -> BR: red
    vec4 bottom = mix(vec4(0.0, 0.0, 0.0, 1.0), vec4(1.0, 0.0, 0.0, 1.0), uv.x);
    
    // TL: green -> TR: yellow
    vec4 top = mix(vec4(0.0, 1.0, 0.0, 1.0), vec4(1.0, 1.0, 0.0, 1.0), uv.x);

    // Fragment shader should output into gl_FragColor an RGBA:
    gl_FragColor = mix(bottom, top, uv.y);
}
