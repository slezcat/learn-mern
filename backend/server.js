const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const asyncHandler = require('express-async-handler');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/users', (req, res) => {
  res.status(200).json({ message: 'Get goals' });
});

app.post('/api/adduser', (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: 'Set goal' });
});

app.put('/api/edituser/:id', (req, res) => {
  res.status(200).json({ message: `Edit user ${req.params.id} ` });
});

app.delete('/api/deleteuser/:id', (req, res) => {
  res.status(200).json({ message: `Edit user ${req.params.id} ` });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
