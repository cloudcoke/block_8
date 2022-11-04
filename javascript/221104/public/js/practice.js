// class Blog {
//   blog;
//   type;

//   constructor(url) {
//     this.setBlog = url;
//     this.setType = url;
//   }

//   set setBlog(value) {
//     this.blog = value.indexOf("http") === -1 ? "https://" + value : value;
//   }

//   set setType(value) {
//     // this.type = value.indexOf("tistory.") >= 0 ? "tistory" : value.indexOf("velog.") >= 0 ? "velog" : null;
//     // const domain = ["tistory.", "velog.", "blog.naver."];
//     // for (let element of domain) {
//     //   //   console.log(element);
//     //   if (value.indexOf(element) >= 0) {
//     //     this.type = element.split(".")[0];
//     //     break;
//     //   }
//     // }
//     const domain = { tistory: "tistory.", velog: "velog.", naver_blog: "blog.naver." };
//     for (let key in domain) {
//       if (value.indexOf(domain[key]) >= 0) {
//         this.type = key;
//         break;
//       }
//     }
//   }
// }

// const a = new Blog("https://cloudcoke.tistory.com/");
// const b = new Blog("cloudcoke.tistory.com");
// const c = new Blog("https://velog.io/@yeseolee/");
// const d = new Blog("https://blog.naver.com/molab_suda");
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

const foo = {};

foo.name = "cloudcoke";
foo["bornYear"] = 1997;
