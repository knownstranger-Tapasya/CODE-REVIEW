const express = require('express');
const cors = require('cors');
const aiRoutes = require("./routes/ai.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// API Route
app.use('/ai', aiRoutes);

module.exports = app;
