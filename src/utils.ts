import p5 from "p5";

type ufNames = "speed" | "fractions";
export const uniforms = {
    state:{
        speed: 1,
        fractions: 1,
    },
  
    modify: function(name: ufNames, value: number, shader: p5.Shader) {
      shader.setUniform(name, value);
      this.state[name] = value;
    }
}