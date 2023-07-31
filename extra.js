app.post("/tasks/create", (req, res) => {
  let newTask = req.body;
  tasks.push(newTask);
  res.send(newTask);
});

app.delete("/tasks/:taskId", (req, res) => {
  let index = tasks.findIndex((task) => task.id === req.params.taskId);
  if (index > -1) {
    tasks.splice(index, 1);
    res.send(`Deleted, ${req.params.taskId}!`);
  } else {
    res.status(404).send("Not found");
  }
});

app.patch("/tasks/:taskId", (req, res) => {
  let index = tasks.findIndex((task) => task.id === req.params.taskId);
  if (index > -1) {
    tasks[index] = req.body;
    res.send(`Updated, ${req.params.taskId}!`);
  } else {
    res.status(404).send("Not found");
  }
});

app.put("/tasks/:taskId", (req, res) => {
  let index = tasks.findIndex((task) => task.id === req.params.taskId);
  if (index > -1) {
    tasks[index] = req.body;
    res.send(`Updated, ${req.params.taskId}!`);
  } else {
    res.status(404).send("Not found");
  }
});
