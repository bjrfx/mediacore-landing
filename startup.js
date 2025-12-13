const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/build')));

// Define API routes
// Example:
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// For all other requests, send the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});