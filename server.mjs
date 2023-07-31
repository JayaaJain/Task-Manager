// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = 3000;
// const jwt = require("jsonwebtoken");
// const secretKey = "your-secret-key";

// app.use(cors());
// app.use(express.json());

// app.listen(port, () => {
//   console.log("server on 3000");
// });

// Maintain a blacklist of revoked tokens
// const revokedTokens = new Set();

export function auth() {
  console.log("Auth called from server");
}
// // Middleware to authenticate and authorize requests
// function authenticate(req, res, next) {
//   const token = req.headers.authorization;
//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   // Check if the token is in the blacklist
//   if (revokedTokens.has(token)) {
//     return res.status(401).json({ message: "Token revoked" });
//   }

//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: "Invalid token" });
//     }
//     // Store the decoded token in the request object for further use
//     req.user = decoded;
//     next();
//   });
// }

// // Login route
// app.post("/login", (req, res) => {
//   //   console.log(req.body);
//   const { username, password } = req.body;

//   // Perform authentication logic, e.g., validate credentials against a database
//   if (username === "john" && password === "secret") {
//     // const token = jwt.sign({ username: username }, secretKey, {
//     //   expiresIn: "1h", //optional: indefinite
//     // });
//     const token = jwt.sign({ username: username }, secretKey);
//     return res.status(200).json({ token: token });
//   }

//   res.status(401).json({ message: "Invalid credentials" });
// });

// // Logout route
// app.post("/logout", (req, res) => {
//   const token = req.headers.authorization;
//   // Add the token to the revoked tokens list
//   revokedTokens.add(token);
//   res.status(200).json({ message: "Token revoked" });
// });

// // Protected route
// app.get("/protected", authenticate, (req, res) => {
//   // Only authenticated and authorized requests reach this point
//   res.status(200).json({ message: "Protected route", user: req.user });
// });
