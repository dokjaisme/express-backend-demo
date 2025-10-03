//index.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});