function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

// Arguments with default value
export const addStrings = (str1: string, str2: string = ""): string => {
  return `${str1} ${str2}`;
};

// Optional arguments either or (type | type)
export const format = (title: string, param: string | number): string => {
  return `${title} ${param}`;
};

// Functions that don't return anything use the 'void' return type
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

// Returns a promise that witll resolve with a string
export const fetchData = (url: string): Promise<string> => {
  return Promise.resolve(`Data from ${url}`);
};

// Function takes an array of strings as an argument
export const introduce = (salutation: string, names: string[]): string => {
  return `${salutation} ${names.join(" ")}`;
};

// Null coalescing operator '??' returns a default value if user? optional parameter is blank or not passed
export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}

// Functions that take a callback as an argument
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// can be imported in other modules and reused for similar functions
export type MutationFunction = (v: number) => number;
export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

const myNewMutateFunction: MutationFunction = (v: number) => {
  return v * 100;
};

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

// closures (functions that return functions)
export function createAdder(num: number): (val: number) => number {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log("addOne(55)", addOne(55));
