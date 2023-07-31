class PracticeThis {
  anyVariable = "LAALA";

  enclosinfunc() {
    let a = 100;
    var b = "someval";

    var anyFunction = () => {
      let x = 6;
      console.log(this, this.anyVariable);
    };

    anyFunction();
  }

  constructor(anyVariable2) {
    this.anyVariable = anyVariable2;
  }

  getVariable() {
    var x = 6;
    console.log(this, this.x);
    // return [this.anyVariable2, this.anyVariable];
  }
}

var objectVariable1 = new PracticeThis("NONONO");
// objectVariable1.anyFunction();
// objectVariable1.getVariable();
objectVariable1.enclosinfunc();
// console.log("With passed value: ", objectVariable1.anyFunction());
