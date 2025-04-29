let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      console.log(this.step);
      return this;
    },
  };
  ladder.up().up().down().showStep().down().showStep();

// Jabobi : 1 va 0 
// Chunki ladder obyektidagi up, down, va showStep metodlari this ni qaytaradi shuning uchun ularni zanjirsimon tarzda method chaqirish mumkin.
  