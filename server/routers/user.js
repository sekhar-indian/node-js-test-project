const express=require('express');
const router=express.Router();
const rating=require('../controllers/ratings');

router.post('/datapost',rating.data);
router.post('/companyreview',rating.companyreview);
// router.get('/',ra)


module.exports=router;