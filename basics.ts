// FROM EPISODE 1: https://www.youtube.com/watch?v=LKVHFHJsiO0
let userName: string = "Jack";
let hasLoggedIn: boolean = true;

userName += " Herrington";

console.log(hasLoggedIn);

let myNumner: number = 10;
let myRegex: RegExp = /foo/;

// Arrays
const names: string[] = userName.split(" "); // standard
const myValues: Array<number> = [1, 2, 3]; // generic

// Objects
// inline optional parameters
const myPerson: {
  first: string;
  last: string;
  cool?: boolean;
} = {
  first: "Jack",
  last: "Herrington",
  cool: true,
};
// optional parameters with an interface
interface Person {
  first: string;
  last: string;
  cool?: boolean;
}
const myPerson2: Person = {
  first: "Jack",
  last: "Herrington",
  cool: true,
};

const mapOfIds: Record<number, string> = {
  10: "a",
  20: "b",
};
mapOfIds[30] = "c";

//  Conditionals
if (mapOfIds[30] === "D") {
}

// For
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// forEach()
[1, 2, 3].forEach((item) => console.log(item));
// map()
const out = [4, 5, 6].map((item) => item * 10);
