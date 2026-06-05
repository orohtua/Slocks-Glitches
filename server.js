const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config');

const app = express();

// Middleware
app.use(cors(config.cors));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'OK', message: 'Anti-Racist RBA System is running' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// Start server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Anti-Racist RBA System running on port ${PORT}`);
  console.log(`Environment: ${config.environment}`);
});

module.exports = app;
