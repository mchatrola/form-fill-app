const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

//routes
app.use('/', require('./routes/root'));

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`)})