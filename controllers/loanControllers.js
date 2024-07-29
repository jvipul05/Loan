const Loans =require("../models/Loans");
const  {interestCalculate}=require("../utilities/Calculate");



exports.createLoan = async(req, res) => { 
 try{
     const {name, lender, amount, interestRate, timePeriod, frequency} = req.body;
     const totalInterest = interestCalculate(amount, interestRate, timePeriod, frequency); 
     const loan = new Loans({name, lender, amount, interestRate, timePeriod, totalInterest, frequency});
     await loan.save();
     res.status(201).json({
            success: 'true',
            data:loan,
            message: 'Loan created successfully'
    });    

 }catch(error){
        res.status(500).json(
            
            {
                success: 'false',
                message: error.message
            }
        );
 }

}


exports.getLoans = async(req, res) => {
    try{
        const loans = await Loans.find();
        res.status(200).json({
            success: 'true',
            data: loans,
            message: 'Loans fetched successfully'
        });
    }catch(error){
        res.status(500).json({
            success: 'false',
            message: error.message
        });
    }
}

exports.getLoanById = async(req, res) => {
    try{
        const loan = await Loans.findById(req.params.id);
        if(!loan){
            return res.status(404).json({
                success: 'false',
                message: 'Loan not found'
            });
        }
        res.status(200).json({
            success: 'true',
            data: loan,
            message: 'Loan fetched successfully'
        });
    }catch(error){
        res.status(500).json({
            success: 'false',
            message: error.message
        });
    }
}


exports.updateLoan = async(req, res) => {
    try{
        const {name, lender, amount, interestRate, timePeriod, frequency} = req.body;
        const totalInterest = interestCalculate(amount, interestRate, timePeriod, frequency);
        const loan = await Loans.findByIdAndUpdate(req.params.id,{name, lender, amount, interestRate, timePeriod,totalInterest, frequency} , {new: true});
        if(!loan){
            return res.status(404).json({
                success: 'false',
                message: 'Loan not found'
            });
        }
        res.status(200).json({
            success: 'true',
            data: loan,
            message: 'Loan updated successfully'
        });
    }
    catch(error){
        res.status(500).json({
            success: 'false',
            message: error.message
        });
    }
}



exports.deleteLoan = async(req, res) => {
    try{
        const loan = await Loans.findByIdAndDelete(req.params.id);
        if(!loan){
            return res.status(404).json({
                success: 'false',
                message: 'Loan not found'
            });
        }
        res.status(200).json({
            success: 'true',
            message: 'Loan deleted successfully'
        });
    }catch(error){
        res.status(500).json({
            success: 'false',
            message: error.message
        });
    }
}
