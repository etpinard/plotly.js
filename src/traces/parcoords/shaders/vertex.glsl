precision highp float;

#pragma glslify: position = require("./position.glsl")

attribute vec4 p0, p1, p2, p3,
               p4, p5, p6, p7,
               p8, p9, pa, pb,
               pc, pd, pe;

attribute vec4 pf;

uniform mat4 dim0A, dim1A, dim0B, dim1B, dim0C, dim1C, dim0D, dim1D,
             loA, hiA, loB, hiB, loC, hiC, loD, hiD;

uniform vec2 resolution,
             viewBoxPosition,
             viewBoxSize;

uniform sampler2D palette;
uniform sampler2D mask;
uniform float maskHeight;

uniform vec2 colorClamp;

varying vec4 fragColor;

void main() {

    float prominence = abs(pf[3]);

    mat4 dims[4];
    dims[0] = mat4(p0, p1, p2, p3);
    dims[1] = mat4(p4, p5, p6, p7);
    dims[2] = mat4(p8, p9, pa, pb);
    dims[3] = mat4(pc, pd, pe, abs(pf));

    gl_Position = position(
        1.0 - prominence,
        resolution,
        dims,
        sign(pf[3]),

        dim0A, dim1A, dim0B, dim1B, dim0C, dim1C, dim0D, dim1D,
        loA, hiA, loB, hiB, loC, hiC, loD, hiD,
        viewBoxPosition, viewBoxSize,
        mask, maskHeight
    );

    float clampedColorIndex = clamp((prominence - colorClamp[0]) / (colorClamp[1] - colorClamp[0]), 0.0, 1.0);
    fragColor = texture2D(palette, vec2((clampedColorIndex * 255.0 + 0.5) / 256.0, 0.5));
}
