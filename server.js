const express = require('express');
const mongoose = require('mongoose');

const rides = require('./routes/api/rides');
const drivers = require('./routes/api/drivers');
const riders = require('./routes/api/riders');

const app = express();

app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/rides', rides);
app.use('/api/drivers', drivers);
app.use('/api/riders', riders);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
