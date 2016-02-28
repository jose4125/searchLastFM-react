import express from 'express';
import indexController from '../controllers/index';

let router = express.Router();

console.log('routes');
router.get('/', indexController);

module.exports = router;
