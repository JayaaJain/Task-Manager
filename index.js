const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const tasks = [
  {
    id: "123",
    name: "task1",
    created_at: "today",
    finish_by: "wednesday",
  },
  {
    id: "456",
    name: "task2",
    created_at: "today",
    finish_by: "wednesday",
  },
];

// Middleware function
const logger1 = (req, res, next) => {
  console.log("Request received 1:", req.method, req.url);
  next(); // Pass control to the next middleware
};

const logger2 = (req, res, next) => {
  console.log("Request received 2:", req.method, req.url);
  next(); // Pass control to the next middleware
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error("An error occurred", err);
  res.status(500).json({ error: "Internal Server Error" });
  // next(err);
};

// Mount the middleware
app.use(logger1);
app.use(logger2);

// Define a route that intentionally throws an error
app.get("/api/error", (req, res, next) => {
  next(new Error("Something went wrong"));
});

// app.use("/tasks", (req, res) => {
//   try {
//     console.log("Request received:", req.method, req.url);
//     res.send(tasks);
//   } catch (err) {
//     console.error("New err");
//     res.status(500);
//   }
// });

// app.get("/tasks/:taskId", (req, res) => {
//   let output = tasks.find((task) => task.id === req.params.taskId);
//   res.send(output);
// });
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
