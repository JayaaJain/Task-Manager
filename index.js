const express = require('express');
const app = express();
const port = 3000;

app.get('/:taskId', (req, res) => {
  res.send(`Here, ${req.params.taskId}!`);
});

app.post('/:taskId', (req, res) => {
  res.send(`Created, ${req.params.taskId}!`);
});

app.delete('/:taskId', (req, res) => {
  res.send(`Deleted, ${req.params.taskId}!`);
});

app.patch('/:taskId', (req, res) => {
  res.send(`Updated, ${req.params.taskId}!`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
