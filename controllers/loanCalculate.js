
const  {interestCalculate}=require("../utilities/Calculate");
exports.loanCalculate = async (req, res) => {

try {
const { principal, interestRate, timePeriod, frequency } = req.body;
const totalInterest = interestCalculate(principal, interestRate, timePeriod, frequency);
const amount = principal + totalInterest;
    res.status(200).json({
        success: 'true',
        totalInterest: totalInterest,
        totalAmount: amount
        });
    } catch (error) {

        res.status(500).json(
    {
            success: 'false',
            message: error.message
        });
    }  
}