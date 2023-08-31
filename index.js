const express = require('express');
const app = express();

// Sample data
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

// Endpoint to get a list of items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Endpoint to get an item by ID
app.get('/api/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(item => item.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});
