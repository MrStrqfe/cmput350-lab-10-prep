#version 120 // glsl version 1.2 for OpenGL 2.1

uniform sampler2D texture;  // the scene from pass 1
uniform vec2 textureSize;   // its size in pixels

void main() {
    // The pixel's position, [0, 1]
    vec2 uv = gl_TexCoord[0].xy;   
    vec2 onePixel = 1.0 / textureSize;  // the size of one pixel in that [0, 1] range

    /* 
    Sum: add up the colours of the 25 pixels in a 5x5 square around the current
    pixel. Dividing by 25 then gives their average.
    */
    vec4 sum = vec4(0.0);
    for (int x = -2; x <= 2; x++) {
        for (int y = -2; y <= 2; y++) {
            sum += texture2D(texture, uv + vec2(float(x), float(y)) * onePixel);
        }
    }

    // Fragment shader should output into gl_FragColor an RGBA:
    gl_FragColor = sum / 25.0;
}
