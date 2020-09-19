// Express and PORT
const express = require('express');

const app = express();

const PORT = process.env.PORT || 6000

app.listen(PORT, console.log(`Server running at port ${PORT}`));


// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/characters', require('./routes/characters'));