const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const rides = require('./routes/api/rides');
const drivers = require('./routes/api/drivers');
const riders = require('./routes/api/riders');
const auth = require('./routes/api/auth');

const app = express();

app.use(express.json());

// DB config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/ride-scheduler', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

// Use Routes
app.use('/api/rides', rides);
app.use('/api/drivers', drivers);
app.use('/api/riders', riders);
app.use('/api/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
