const express = require('express');
const app = express();
const connectDB = require('./db/config');
const path = require('path');
const PORT = process.env.PORT || 5000;
require('dotenv').config();
connectDB();
const Crash = require('./db/Models/Crashes');

// Middleware
app.use(express.json());
// Serve static files from the React build
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Routes
// const routes = require('/routes');
// app.use('/api', routes);

app.get('/api', async (req, res) => {
  try {
    let results = await Crash.find({
      collision_severity: {
        $in: [1, 2],
      },
    }).select('-_id');
    console.log(results);
    res.json(results);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
