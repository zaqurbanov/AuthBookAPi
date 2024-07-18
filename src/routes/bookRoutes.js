const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController')

router.get('/',bookController.getAllBook);
router.get('/:id',bookController.getBookById);
router.put('/:id',bookController.updateBookById);
router.delete('/:id',bookController.deleteBookById);
router.post('/',bookController.createBook);




module.exports = router 