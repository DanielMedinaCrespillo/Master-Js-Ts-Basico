export const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
};

export const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
  let cache: any;
  return ((...args: any[]) => {
    if (cache !== undefined) {
      return cache;
    }

    cache = fn(...args);
    return cache;
  }) as T;
};

const memoized = memoize(expensiveFunction);

console.log(memoized());
console.log(memoized());
console.log(memoized());
