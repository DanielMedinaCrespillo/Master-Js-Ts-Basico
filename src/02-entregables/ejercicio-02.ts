console.log("************** DELIVERABLE 02 *********************");

//Concat
const lightColor: string[] = ["light-blue", "white", "light-red"];
const darkColor: string[] = ["dark-blue", "black", "dark-red"];

const concat = (lightColor: string[], darkColor: string[]) => {
  return lightColor.concat(darkColor);
};

const fConcat = concat(lightColor, darkColor);

console.log("Ejercicion concat", fConcat);
