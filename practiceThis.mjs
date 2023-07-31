// const server = require("./server");
import { auth } from "./server.mjs";
console.log(auth());

const practiceThis = {
  anyVariable: "AnyVariableVal",

  // anyFunction: () => {
  //   console.log("ARROW FUNCTION :: ", this.anyVariable);
  // },

  normalFunc: function () {
    console.log();
    console.log("NORMAL FUNCTION :: ", this); // practiceThis ka object
  },
};

console.log(this); // module.export

function normalFunc() {
  console.log();
  console.log("NORMAL FUNCTION :: ", this); // global
}

normalFunc();
// practiceThis.anyFunction();
// practiceThis.normalFunc();
