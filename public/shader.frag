precision mediump float;
varying vec2 pos;

uniform float millis;
uniform float fractions;

float FACTOR = 4.0;

vec4 orang   = vec4(240. / 255., 146. / 255., 5.   / 255., 1.);
vec4 blue    = vec4(19.  / 255., 86.  / 255., 232. / 255., 1.);
vec4 green   = vec4(0.   / 255., 255. / 255., 94.  / 255., 1.);
vec4 magenta = vec4(240. / 255., 0.   / 255., 212. / 255., 1.);

void main() {
  vec4 fs = vec4(pos,0.7,1.);

  vec4 top = mix(blue, orang, pos.x);
  vec4 btom = mix(magenta, green, pos.y);
  vec4 res = mix(top, btom, pos.y);
  vec2 fraction = fract(fs.xy * fractions);

  gl_FragColor = vec4(fraction.x, fraction.y * (sin(millis/1000.)+1.), res.z, 0.7);
}