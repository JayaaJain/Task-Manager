const axios = require("axios");

// axios.get("/data1", (req, res) => {
//   res.send("data1");
// });

// axios.get("/data2", (req, res) => {
//   res.send("data2");
// });

// const timeout = setTimeout(() => {
//   console.log("timeout");
// }, 2000);

const promise = new Promise((resolve, reject) => {
  resolve("logged");
});

function callPromise() {
  return new Promise((resolve, reject) => {
    resolve("logged");
  });
}

function makeCalls() {
  callPromise().then((res) => {
    console.log(res);
  });
  console.log("Hi there");
}

console.log("log1");

makeCalls();

/**
 *
 * we convert synchronous behaviour of javascript to asynchronous via promises, callbacs or async await
 *
 */
