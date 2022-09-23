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

// describe("User Notes endpoints", ()=>{
//   describe("GET /notes", ()=>{
//     describe("Given a valid token", ()=>{
//       it("should return all user notes", ()=>{
//         expect(data).anyObject({title:expect.any(String)})
//       })
//     })
//     describe("Given invalid token", ()=>{
//       test("should return 400 error", ()=>{
//         expect(statusCode).toBe(400)
//         expect(body.msg).toMatch("unauthorized")
//       })
//     })
//   })
// })
