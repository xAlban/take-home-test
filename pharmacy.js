export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue(){
    if (this.benefit > 0 && this.name != "Magic Pill"){
      this.benefit -= 1;
    }
  }
}

export class HerbalTea extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  updateBenefitValue(){
    if (this.benefit < 50){
      this.benefit += 1;
    }
    if (this.expiresIn < 0 && this.benefit < 50){
      this.benefit += 1;
    }
  }
}

export class Fervex extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  updateBenefitValue(){
    if (this.expiresIn <= 0){
      this.benefit = 0;
    } else if (this.expiresIn <= 5 && this.benefit < 48){
      this.benefit += 3;
    } else if (this.expiresIn <= 10 && this.benefit < 49) {
      this.benefit += 2;
    } else if (this.benefit < 50) {
      this.benefit += 1;
    }
  }
}

export class Dafalgan extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  updateBenefitValue(){
    if (this.benefit > 1){
      this.benefit -= 2;
    }
    if (this.expiresIn < 0 && this.benefit > 1){
      this.benefit -= 2;
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefitValue();
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
    }

    return this.drugs;
  }
}
