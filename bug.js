const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Missing crucial error handling here! 
  // What if req.body is malformed or empty? 
  console.log('Received:', user); 
  res.status(201).send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));