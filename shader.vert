precision mediump float;
attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 pos;
uniform float millis;
uniform float speed;

float FACTOR = 7.0;
float time = millis / 300. * speed;

void main() {
  pos = aTexCoord;
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  positionVec4.y *= (sin(positionVec4.x*FACTOR + time)-cos(positionVec4.x*FACTOR + time))/FACTOR;
  positionVec4.x = sin(positionVec4.x + millis/1000.);

  // positionVec4.y = cos(millis/1000. + positionVec4.x);
  gl_Position = positionVec4;
} 