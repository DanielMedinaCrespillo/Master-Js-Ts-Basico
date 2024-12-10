export function deepSet(value, obj, ...keys) {
  if (keys.length === 0) {
    return;
  }

  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    if (typeof current[key] !== "object" || current[key] === null) {
      current[key] = {};
    }

    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
}

const myObject = {};

deepSet(1, myObject, "a", "b");
console.log(JSON.stringify(myObject));
deepSet(2, myObject, "a", "c");
console.log(JSON.stringify(myObject));
deepSet(3, myObject, "a");
console.log(JSON.stringify(myObject));
deepSet(4, myObject);
console.log(JSON.stringify(myObject));
