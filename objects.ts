{
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
}
