require('dotenv').config();
require('./server/db-conn');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('./client/cooking_the_books/build/'));

// Mount routes
app.use('/api/recipes/', require('./server/routes/recipes-route'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/client/cooking_the_books/build/'});
});

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server starting on port ${PORT}`));
