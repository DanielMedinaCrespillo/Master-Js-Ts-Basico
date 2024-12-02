console.log("************** DELIVERABLE 01 *********************");

//Ejercicios

//Arrays operations
//Head

const size: string[] = ["large", "medium", "small"];

const head = (size: string[]) => {
  return size[0];
};

const firstArray = head(size);

console.log("Ejercicio head: ", firstArray);

//Tail

const tail = (size: string[]) => {
  const [, ...last] = size;
  return last;
};

const lastArray = tail(size);

console.log("Ejercicio tail: ", lastArray);

//Init

const init = (size: string[]) => {
  return size.slice(0, size.length - 1);
};

const fInit = init(size);

console.log("Ejercicio init: ", fInit);

//Last

const last = (size: string[]) => {
  return size[size.length - 1];
};

const fLast = last(size);

console.log("Ejercicio last: ", fLast);

console.log(size);
