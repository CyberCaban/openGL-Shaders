precision mediump float;
attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 pos;
uniform float millis;

float FACTOR = 7.0;

void main() {
  pos = aTexCoord;
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  positionVec4.y = (sin(positionVec4.x*FACTOR + millis/300.)-cos(positionVec4.x*FACTOR + millis/300.))/FACTOR;
  // positionVec4.x += cos(positionVec4.y * 5. + millis/1000.);

  // positionVec4.y = cos(millis/1000. + positionVec4.x);
  gl_Position = positionVec4;
} 