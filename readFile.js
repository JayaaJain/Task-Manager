const { rejects } = require("assert");
const fs = require("fs");

// fs.readFile("./textFile.txt", (err, data) => {
//   console.log(data.toString());
// });

// const output = fs.readFileSync("./textFile.txt");
// console.log(output.toString());

function readFileFunc(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// readFileFunc("./textFile.txt")
//   .then(
//     (onfull) => {
//       console.log("reached onful");
//       console.log("resolved: ", onfull.toString());
//     },
//     (onreject) => {
//       console.log("rejected", onreject.toString());
//     }
//   )
//   .catch((err) => {
//     console.log("error caugth", err);
//   });

async function readFileFuncAsync1(filePath) {
  try {
    const output = await readFileFunc(filePath);
    console.log(output.toString());
  } catch (error) {
    console.log("error caugth on promise", error);
  }
}

function readFileFuncAsync2(filePath) {
  try {
    const output = fs.readFileSync(filePath);
    console.log(output.toString());
  } catch (error) {
    console.log("error caugth in async read", error);
  }
}

readFileFuncAsync1("./textFile.txt");
readFileFuncAsync2("./textFile.txt");
