const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

//middlewares
app.use(cookieParser())
app.use(express.json());
dotenv.config();

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];


app.get('/', (req, res) =>
    res.send("Welcome ItemCatalog API")
);

app.get("/items", (req, res) => {
    res.json(items);
});
app.get("/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(item => item.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

app.listen(process.env.PORT || 5000, () => {
    console.log('Server running on port 5000');
});