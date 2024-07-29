const Loans = require("../models/Loans");
const  {interestCalculate}=require("../utilities/Calculate");
exports.loanCalculate = async (req, res) => {

try {
const {timePeriod} = req.body;
const loan = await Loans.findById(req.params.id);
const calculatedInterest = interestCalculate(loan.amount, loan.interestRate, timePeriod, loan.frequency);
const calculatedAmount = loan.amount + calculatedInterest;
    res.status(200).json({

        success: 'true',
        totalInterest: loan.totalInterest,
        totalAmount: loan.amount+loan.totalInterest,
        calculatedInterest: calculatedInterest,
        calculatedAmount: calculatedAmount,
        message: 'Loan calculated successfully'

        });
    } catch (error) {

        res.status(500).json(
    {
            success: 'false',
            message: error.message
        });
    }  
}