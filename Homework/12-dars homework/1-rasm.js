let user={
    id:1,
    firtName:"Eshmat",
    surName:"Toshmatov",
    age:30,
    getFullName:()=>{
        return `${this.firtName} ${this.surName}`;
    },
}

console.log(user.getFullName);

// Javobi: [Function: getFullName]

// Chunki biz returnda qaytargannimiz getFullName ni ichidan qidiryapmiz shuning uchun bu chiqara olmayapti.
// this ni qo'llaganimizda u buni getFullName ni ichida bor deb o'ylaydi.