const router = require('express').Router();
// const {  getItemById } = require('../controllers/itemsController');
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

//GET all Items [done]
router.get("/", (req, res) => {
    res.json(items);
});

//Get items by ID [done]
router.get("/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(item => item.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});




module.exports = router;