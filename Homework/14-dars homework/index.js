//                    1-masala
// let str1 = "webbrain academy";
// let str2 = "acsa";
// function check(str1, str2) {
//   return str2.split('').every(char => str1.includes(char));
// }
// console.log(check(str1, str2));


//                    2-masala
// let str = "webbrain";
// function getCount(str) {
//   return [...str].reduce((acc, char) => {
//     if (char !== ' ') acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});
// }
// console.log(getCount(str));


//                    3-masala
// let str = "webbrain academy";
// let n = 5;
// function truncate(str, n) {
//   return str.slice(0, n);
// }
// console.log(truncate(str, n));


//                    4-masala
// let str = "$1200";
// function getCurrency(str) {
//   return parseFloat(str.replace(/[^0-9]/g, ''));
// }
// console.log(getCurrency(str));


//                    5-masala
// let str = "webbr@!n_2022";
// function analyze(str) {
//   let res = { letter: 0, char: 0, numbers: 0 };
//   for (let c of str) {
//     if (/[a-zA-Z]/.test(c)) res.letter++;
//     else if (/[0-9]/.test(c)) res.numbers++;
//     else res.char++;
//   }
//   return res;
// }
// console.log(analyze(str));


//                    6-masala
// let str = "webbrain academy";
// function capitalize(str) {
//   return str.split(' ')
//             .map(word => word[0].toUpperCase() + word.slice(1))
//             .join(' ');
// }
// console.log(capitalize(str));

