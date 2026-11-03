#version 120 // glsl version 1.2 for OpenGL 2.1

uniform vec2 windowSize;
uniform vec2 mousePos;

void main(void) {
    vec2 uv = gl_FragCoord.xy / windowSize;
    // BL: black -> BR: red
    vec4 bottom = mix(vec4(0.0, 0.0, 0.0, 1.0), vec4(1.0, 0.0, 0.0, 1.0), uv.x);
    
    // TL: green -> TR: yellow
    vec4 top = mix(vec4(0.0, 1.0, 0.0, 1.0), vec4(1.0, 1.0, 0.0, 1.0), uv.x);

    // sfml measures mouse y from the top of the window, but gl_fragcoord is the
    // opposite.
    vec2 mouse = vec2(mousePos.x, windowSize.y - mousePos.y);

    // Fragment shader should output into gl_FragColor an RGBA:
    gl_FragColor = mix(bottom, top, uv.y);

    // test whether each pixel is inside the circle
    if (distance(gl_FragCoord.xy, mouse) <= 10.0) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
    
}
