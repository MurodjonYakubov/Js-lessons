let obj = {
    name:"Gulbashakar",
    age:25,
    status:"Quruvchi"
}
let value=[]
for(let key in obj){
    if (obj.hasOwnProperty(obj[key])) {
        value.push(obj[key]);
    }
}


let key=[]
for(let key in obj){
    if (obj.hasOwnProperty(key)) {
        key.push(key);
    }
}
