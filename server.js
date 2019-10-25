const express = require('express');

const connectDB = require('./config/db');

const app = express();

// Connect DB
connectDB();

// Init Middelware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Hello World!' }));

app.get('/api/auth', require('./routes/auth'));
app.get('/api/users', require('./routes/users'));
app.get('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port: ${PORT}`));
