const express = require('express');
const router = express.Router();
const { verifyAuth } = require("../utils/verifyAuth");
const { getOrders,createOrders } = require("../controllers/ordersController");
const { userLogin,userSignUp } = require("../controllers/usersController");


router.post('/login',userLogin);
router.post('/signup',userSignUp);


router.get('/orders', verifyAuth,getOrders);

router.post('/orders', verifyAuth,createOrders);


module.exports = router;
