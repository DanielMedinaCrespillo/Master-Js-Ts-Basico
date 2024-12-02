console.log("************** DELIVERABLE 03 *********************");

interface Person {
  name: string;
  surname?: string;
  country?: string;
  age?: number;
  married?: boolean;
}

const a: Person = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b: Person = { name: "Luisa", age: 31, married: true };

//Clone

function clone(a: Person): Person {
  return { ...a };
}

console.log("Ejercicio clone: ", clone(a));

//Merge

function merge(a: Person, b: Person) {
  return { ...b, ...a };
}

console.log("Ejercicio merge: ", merge(a, b));
