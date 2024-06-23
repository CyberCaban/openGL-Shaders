import p5 from "p5";
import "./style.css"
import { uniforms } from "./utils";

const WIDTH = document.body.clientWidth/2;
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

    Object.entries(uniforms.state).forEach(([key, value]) => {
      sh.setUniform(key, value);
    })
    // console.log(Object.entries(uniforms));
  };
  p.draw = () => {
    p.clear();
    // p.background(0, 0, 0, 100);
    sh.setUniform("millis", p.millis());
    
    p.ellipse(0, 0, 30, 30, 300);
  };
};

new p5(
  sketch,
  document.getElementById("app") as HTMLElement
);

const speed = document.getElementById("speed") as HTMLInputElement;
speed.addEventListener("input", () => {
  uniforms.modify("speed", +speed.value, sh);
})
const fractions = document.getElementById("fraction") as HTMLInputElement;
fractions.addEventListener("input", () => {
  uniforms.modify("fractions", +fractions.value, sh);
})