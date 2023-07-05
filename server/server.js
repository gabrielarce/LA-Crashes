const express = require('express');
const app = express();
const db = require('./db/config');
const path = require('path');
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
// Serve static files from the React build
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Routes
// const routes = require('/routes');
// app.use('/api', routes);

app.get('/api', async (req, res) => {
  try {
    // Execute a simple query to check the connection
    const result = await db.any(
      'SELECT * FROM accidents WHERE number_killed >= 1;'
    );
    console.log('Connected to the database:');
    res.json(result);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    // Close the database connection
    db.$pool.end();
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
