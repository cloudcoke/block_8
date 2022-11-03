const foo = {
  a: 1,
  b: "two",
  c: {
    d: 4,
    e: "five",
  },
  f: function boo() {},
};

console.log(foo); // {a: 1, b: 'two', c: {…}, f: ƒ}
console.log(typeof foo); // object
