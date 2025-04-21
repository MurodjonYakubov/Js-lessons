// let age = Number(prompt("Yoshingiz nechida: "))
// let user={}

// if(age<=6){
//     user.qayerdaOqiydi="boqcha";
// }else if(age>=7 && age<=18){
//     user.qayerdaOqiydi="maktab";
// }else{
//     user.qayerdaOqiydi="institut";
// }
// console.log(user)


let yil = Number(prompt("Yilinggizni kiriting: "))
let yosh = 2025 - yil
let user={}
if(yosh<=6){
    user.qayerdaOqiydi="boqcha";
}else if(yosh>=7 && yosh<=18){
    user.qayerdaOqiydi="maktab";
}else{
    user.qayerdaOqiydi="institut";
}
console.log(user);
