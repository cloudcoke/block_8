// const obj = {
//   name: "곽인구",
//   age: 32,
//   sizes: {
//     // x0011
//     height: 180,
//     weight: 80,
//   },
// };

// const clone_obj = obj;

// const clone = { ...obj }; // 내용만 복사

/*
{name: '곽인구', age: 32, sizes: {…}}
age: 32
name: "곽인구"
sizes: x0011
 */

// const inner_clone1 = { ...obj, sizes: { ...obj.sizes } };

// const inner_clone2 = { ...obj, ...obj.sizes };

// const inner_clone3 = { ...obj, a: { ...obj.sizes } };

// console.log("obj");
// console.log(obj);

// console.log("clone");
// console.log(clone);

// console.log("inner_clone1");
// console.log(inner_clone1);

// console.log("inner_clone2");
// console.log(inner_clone2);

// console.log("inner_clone3");
// console.log(inner_clone3);

// console.log("obj === clone");
// console.log(obj.sizes === clone.sizes); // true

// console.log("obj === inner_clone1");
// console.log(obj.sizes === inner_clone1.sizes); // false

// console.log("obj === inner_clone2");
// console.log(obj.sizes === inner_clone2.sizes); // true

// console.log("obj === inner_clone3");
// console.log(obj.sizes === inner_clone3.sizes); // true
