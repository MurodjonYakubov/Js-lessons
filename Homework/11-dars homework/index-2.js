//                                        1-mashq
// let obj = { id: 1, name: "WebBrain" };
// for (let key in obj) {
//   console.log(key); 
// }


//                                        2-mashq
// let obj = { id: 1, name: "WebBrain" };
// for (let key in obj) {
//   if (typeof obj[key] === "number") {
//     console.log(key);
//   }
// }


//                                        3-mashq
// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false
//   };
//   for (let key in obj) {
//     if (typeof obj[key] === "boolean") {
//       console.log(key + ":", obj[key]);
//     }
//   }


//                                        4-mashq
// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false
//   };
//   function Search(obj, str) {
//     for (let key in obj) {
//       if (obj[key] === str) {
//         console.log(key + ":", obj[key]);
//       }
//     }
//   }
//   Search(obj, "WebBrain");
  

//                                        5-mashq
// let obj = {
//     id: 1,
//     name: "atirgul",
//     color: "qizil",
//     count: 10,
//     price: "10$"
//   };
//   function searchValue(obj, str) {
//     for (let key in obj) {
//       if (typeof obj[key] === "string" && obj[key].includes(str)) {
//         console.log(obj[key]);
//       }
//     }
//   }
//   searchValue(obj, "i");
  

//                                        6-mashq
// let person = {
//     id: 1,
//     name: "Odil",
//     age: 78,
//     child: {
//       id: 1,
//       name: "Ali",
//       age: 48,
//       child: {
//         id: 1,
//         name: "Umar",
//         age: 20
//       }
//     }
//   };
//   function sumAge(obj) {
//     let total = 0;
//     for (let key in obj) {
//       if (key === "age") {
//         total += obj[key];
//       }
//       if (typeof obj[key] === "object") {
//         total += sumAge(obj[key]);
//       }
//     }
//     return total;
//   }
//   console.log(sumAge(person));
  

//                                        7-mashq
// let obj = {
//     id: 1,
//     name: "Usmon",
//     job: "developer"
//   };
//   let clone = {};
//   for (let key in obj) {
//     clone[key] = obj[key];
//   }
//   obj.name = "Ali";
//   console.log(clone);


//                                        8-mashq
// let obj = {
//     id: 1,
//     name: "Usmon",
//     age: 34,
//     year: 1990
//   };
//   let currentYear = new Date().getFullYear();
//   for (let key in obj) {
//     if (key === "year") {
//       if (currentYear - obj[key] !== obj["age"]) {
//         console.log("xato malumot kiritdingiz");
//       }
//     }
//   }
  

//                                        9-mashq
// let obj = {
//     id: 1,
//     title: "the best",
//     address: { street: "Farobiy", number: "34" }
//   };
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       console.log(true);
//       break;
//     }
//   }