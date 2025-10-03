//index.js
const express = require('express');
const app = express();
const port = 3000;

//middleware
app.use(express.json())

//in-memory database
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

//root
app.get('/', (req, res) => {
  res.send('Welcome to the User API');
});

//get all users
app.get('/users', (req, res) => {
  res.json(users);
});

//--- NEW: get user by id
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

//start
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});