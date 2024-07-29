const Loans = require("../models/Loans");
const  {interestCalculate}=require("../utilities/Calculate");
exports.loanCalculate = async (req, res) => {

try {
const {timePeriod} = req.body;
const loan = await Loans.findById(req.params.id);
const calculatedInterest = interestCalculate(loan.amount, loan.interestRate, timePeriod, loan.frequency);
const calculatedAmount = loan.amount + calculatedInterest;
  if(timePeriod > loan.timePeriod){
  var message = 'Loan period exceeded';
  }
  else{
    message = 'Loan calculated successfully';
  }
    res.status(200).json({

        success: 'true',
        data:  { 
            totalInterest: loan.totalInterest,
            totalAmount: loan.amount+loan.totalInterest,
            calculatedInterest: calculatedInterest,
            calculatedAmount: calculatedAmount,},
        message: message

        });
    } catch (error) {

        res.status(500).json(
    {
            success: 'false',
            message: error.message
        });
    }  
}