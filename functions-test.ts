import addNumbers from "./functions";
import { addStrings, format, introduce, getName } from "./functions";

console.log("addNumbers(1, 2)", addNumbers(1, 2));
console.log(addStrings("a", "b"));
console.log("format('word', 'something')", format("word", "something"));
console.log(introduce("Hello", ["john", "jane", "random"]));
console.log(getName({ first: "jack", last: "herrington" }));
console.log(getName());
