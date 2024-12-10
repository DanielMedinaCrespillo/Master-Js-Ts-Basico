const expensiveFunction = (): number => {
  console.log("Una única llamada");
  return 3.1415;
};

const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
  let cache: any;
  return ((...args: any[]) =>
    cache !== undefined ? cache : (cache = fn(...args))) as T;
};

const memoized = memoize(expensiveFunction);

console.log(memoized());
console.log(memoized());
console.log(memoized());
