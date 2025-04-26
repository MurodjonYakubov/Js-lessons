function Calculator() {
  this.read = function() {
    this.a = +prompt("Birinchi sonni kiriting:", 0);
    this.b = +prompt("Ikkinchi sonni kiriting:", 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sonlar qo'shilmasi: " + calculator.sum());
alert("Sonlar ko'paytmasi: " + calculator.mul());