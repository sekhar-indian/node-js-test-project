const express=require('express');
const router=express.Router();
const rating=require('../controllers/ratings');

router.get('/',rating.data);
// router.get('/',ra)


module.exports=router;