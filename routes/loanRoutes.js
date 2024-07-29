const express = require('express');
const router = express.Router();

const {createLoan,getLoans,getLoanById,updateLoan,deleteLoan} = require('../controllers/loanControllers');

const {authCheck} = require('../middleware/auth');

const {loanCalculate}=require("../controllers/loanCalculate");

router.post('/createLoan',authCheck,createLoan);
router.get('/getLoans',authCheck,getLoans);
router.get('/getLoanById/:id',authCheck,getLoanById);
router.put('/updateLoan/:id',authCheck,updateLoan);
router.delete('/deleteLoan/:id',authCheck,deleteLoan);

router.post('/loanCalculate/:id',authCheck,loanCalculate);

module.exports = router;