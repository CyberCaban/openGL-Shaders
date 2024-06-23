import p5 from "p5";
import "./style.css"

const WIDTH = document.body.clientWidth;
const HEIGHT = WIDTH;

let sh: p5.Shader;
export const sketch = (p: p5) => {
  p.preload = () => {
    sh = p.loadShader("./shader.vert", "./shader.frag");
  };
  p.setup = () => {
    p.createCanvas(WIDTH, HEIGHT, p.WEBGL);
    
    p.shader(sh);
    p.noStroke();
  };
  p.draw = () => {
    p.clear();
    p.background(0, 0, 0, 100);
    
    sh.setUniform("millis", p.millis());
    p.fill(255, 0, 0);
    // p.square(0, 0, 100);
    p.ellipse(0, 0, 30, 30, 300);
  };
};

new p5(
  sketch,
  document.getElementById("app") as HTMLElement
);

const canvas = document.querySelector("canvas");