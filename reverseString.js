let string = "jayajain, hello";

function reverseString() {
  for (let i = 0; i < string.length / 2; i++) {
    string.replace(string[i], string[string.length - i - 1]);
  }
  console.log(string);

  let revstring = "hello".split("").reverse().join("");
  console.log(revstring);
}

reverseString();
