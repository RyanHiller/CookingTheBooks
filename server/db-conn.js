const mongoose = require('mongoose');

const { DB_CONN } = process.env;

mongoose
  .connect(DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the DB successfully'))
  .catch(console.error);
