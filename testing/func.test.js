const { sum } = require("./func");

test("should add 2 + 2 = 4", () => {
  const result = sum(2, 2);
  expect(result).toBe(7);
  //   expect(result).toEqual(4);
});
it("should add 3 + 5 = 8", () => {});

// describe("Login tests", () => {
//   test("should login given correct password", () => {});
//   test("should failed given wrong password or wrong users", () => {});
// });

// describe("Registration tests", () => {
//   it("should return new account data given a valid registration data",()=>{});
//   it("should return error given invalid data", ()=>{})
// });
