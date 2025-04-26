let user = {
  id: 1,
  name: "Eshmat",
  age: 65,
  status: "Nafaqa oluvchi",
  child: {
    id: 2,
    name: "Toshmat",
    age: 30,
    status: "Talaba",
    func() {
      return this.age;
    },
  },
};

let cloneUser = structuredClone(user);
cloneUser.child.age = 45;
console.log(user);
console.log(cloneUser);
