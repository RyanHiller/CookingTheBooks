require('dotenv').config();
require('./server/db-conn');
const express = require('express');

const app = express();
app.use(express.static('./client/build/'));

// Mount routes
app.use('/api/recipes/', require('./server/routes/recipes-route'));

// Handle 404 redirect
app.use((req, res, next) => {
  res.status(404).sendFile('index.html', { root: __dirname + '/client/build/'})
})

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/client/build/'});
});

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server starting on port ${PORT}`));
