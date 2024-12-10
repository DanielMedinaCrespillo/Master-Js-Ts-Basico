const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

export function deepGet(obj: any, ...keys: string[]): any {
  return keys.reduce((result, key) => {
    return result && typeof result === "object" && key in result
      ? result[key]
      : undefined;
  }, obj);
}

console.log(deepGet(myObject, "x"));
console.log(deepGet(myObject, "a"));
console.log(deepGet(myObject, "b"));
console.log(deepGet(myObject, "b", "c"));
console.log(deepGet(myObject, "b", "d", "f", "g"));
console.log(deepGet(myObject));
