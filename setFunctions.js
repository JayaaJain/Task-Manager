setTimeout(() => {
  console.log("Delayed execution");
}, 1);

setImmediate(() => {
  console.log("Immediate execution");
});
