const express = require('express');
const router = express.Router();

const {createLoan,getLoans,getLoanById,updateLoan,deleteLoan} = require('../controllers/loanControllers');

const {authCheck} = require('../middleware/auth');

const {loanCalculate}=require("../controllers/loanCalculate");
/**
 * @swagger
 * /api/v1/loans/createloan:
 *   post:
 *     summary: Create a new loan
 *     description: Creates a new loan record with the specified details including name, lender, amount, interest rate, time period, and repayment frequency.
 *     tags:
 *       - Loans
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Loan test 3"
 *                 description: The name of the loan.
 *               lender:
 *                 type: string
 *                 example: "Bank XYZ"
 *                 description: The lender providing the loan.
 *               amount:
 *                 type: number
 *                 example: 1000
 *                 description: The principal loan amount.
 *               interestRate:
 *                 type: number
 *                 format: float
 *                 example: 7.5
 *                 description: The interest rate of the loan.
 *               timePeriod:
 *                 type: number
 *                 example: 2
 *                 description: The duration of the loan in years.
 *               frequency:
 *                 type: string
 *                 example: "annually"
 *                 description: The repayment frequency (e.g., monthly, quarterly, annually).
 *     responses:
 *       201:
 *         description: Loan successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The loan ID.
 *                 name:
 *                   type: string
 *                   description: The name of the loan.
 *                 lender:
 *                   type: string
 *                   description: The lender providing the loan.
 *                 amount:
 *                   type: number
 *                   description: The principal loan amount.
 *                 interestRate:
 *                   type: number
 *                   format: float
 *                   description: The interest rate of the loan.
 *                 timePeriod:
 *                   type: number
 *                   description: The duration of the loan in years.
 *                 frequency:
 *                   type: string
 *                   description: The repayment frequency.
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the loan was created.
 *       400:
 *         description: Bad Request - Invalid input
 *       500:
 *         description: Internal Server Error
 */

router.post('/createLoan',authCheck,createLoan);
/**
 * @swagger
 * /api/v1/loans/getLoans:
 *   get:
 *     summary: Get all loans
 *     description: Retrieves a list of all loan records. Requires a valid JWT token for authentication.
 *     tags:
 *       - Loans
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of loans
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The loan ID.
 *                   name:
 *                     type: string
 *                     description: The name of the loan.
 *                   lender:
 *                     type: string
 *                     description: The lender providing the loan.
 *                   amount:
 *                     type: number
 *                     description: The principal loan amount.
 *                   interestRate:
 *                     type: number
 *                     format: float
 *                     description: The interest rate of the loan.
 *                   timePeriod:
 *                     type: number
 *                     description: The duration of the loan in years.
 *                   frequency:
 *                     type: string
 *                     description: The repayment frequency.
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp when the loan was created.
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       500:
 *         description: Internal Server Error
 */
router.get('/getLoans',authCheck,getLoans);
/**
 * @swagger
 * /api/v1/loans/getloanbyid/{id}:
 *   get:
 *     summary: Get a loan by ID
 *     description: Retrieves the details of a specific loan by its ID. Requires a valid JWT token for authentication.
 *     tags:
 *       - Loans
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the loan to retrieve.
 *     responses:
 *       200:
 *         description: Loan details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The loan ID.
 *                 name:
 *                   type: string
 *                   description: The name of the loan.
 *                 lender:
 *                   type: string
 *                   description: The lender providing the loan.
 *                 amount:
 *                   type: number
 *                   description: The principal loan amount.
 *                 interestRate:
 *                   type: number
 *                   format: float
 *                   description: The interest rate of the loan.
 *                 timePeriod:
 *                   type: number
 *                   description: The duration of the loan in years.
 *                 frequency:
 *                   type: string
 *                   description: The repayment frequency.
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the loan was created.
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       404:
 *         description: Loan not found
 *       500:
 *         description: Internal Server Error
 */
router.get('/getLoanById/:id',authCheck,getLoanById);
/**
 * @swagger
 * /api/v1/loans/updateloan/{id}:
 *   put:
 *     summary: Update an existing loan
 *     description: Updates the details of an existing loan with the specified ID. Requires a valid JWT token for authentication.
 *     tags:
 *       - Loans
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the loan to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Loan test 7"
 *                 description: The name of the loan.
 *               lender:
 *                 type: string
 *                 example: "Bank XYZ"
 *                 description: The lender providing the loan.
 *               amount:
 *                 type: number
 *                 example: 10000
 *                 description: The principal loan amount.
 *               interestRate:
 *                 type: number
 *                 format: float
 *                 example: 5.5
 *                 description: The interest rate of the loan.
 *               timePeriod:
 *                 type: number
 *                 example: 3
 *                 description: The duration of the loan in years.
 *               frequency:
 *                 type: string
 *                 example: "annually"
 *                 description: The repayment frequency (e.g., monthly, quarterly, annually).
 *     responses:
 *       200:
 *         description: Loan successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The loan ID.
 *                 name:
 *                   type: string
 *                   description: The updated name of the loan.
 *                 lender:
 *                   type: string
 *                   description: The updated lender providing the loan.
 *                 amount:
 *                   type: number
 *                   description: The updated principal loan amount.
 *                 interestRate:
 *                   type: number
 *                   format: float
 *                   description: The updated interest rate of the loan.
 *                 timePeriod:
 *                   type: number
 *                   description: The updated duration of the loan in years.
 *                 frequency:
 *                   type: string
 *                   description: The updated repayment frequency.
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the loan was last updated.
 *       400:
 *         description: Bad Request - Invalid input
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       404:
 *         description: Loan not found
 *       500:
 *         description: Internal Server Error
 */
router.put('/updateLoan/:id',authCheck,updateLoan);
/**
 * @swagger
 * /api/v1/loans/deleteloan/{id}:
 *   delete:
 *     summary: Delete a loan by ID
 *     description: Deletes a specific loan by its ID. Requires a valid JWT token for authentication.
 *     tags:
 *       - Loans
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the loan to delete.
 *     responses:
 *       200:
 *         description: Loan successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Loan successfully deleted"
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       404:
 *         description: Loan not found
 *       500:
 *         description: Internal Server Error
 */
router.delete('/deleteLoan/:id',authCheck,deleteLoan);
/**
 * @swagger
 * /api/v1/loans/loancalculate/{id}:
 *   post:
 *     summary: Calculate loan details based on time period
 *     description: Calculates the loan details such as the amount due after a specific time period. Requires a valid JWT token for authentication.
 *     tags:
 *       - Loans
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the loan to calculate.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               timePeriod:
 *                 type: number
 *                 description: The time period in years for which to calculate the loan details.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Loan calculation successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The loan ID.
 *                 originalAmount:
 *                   type: number
 *                   description: The original principal loan amount.
 *                 interestRate:
 *                   type: number
 *                   format: float
 *                   description: The interest rate of the loan.
 *                 timePeriod:
 *                   type: number
 *                   description: The time period for which the calculation was made.
 *                 calculatedAmount:
 *                   type: number
 *                   description: The amount due after the specified time period.
 *                 calculationDate:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the calculation was made.
 *       400:
 *         description: Bad Request - Invalid input
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       404:
 *         description: Loan not found
 *       500:
 *         description: Internal Server Error
 */

router.post('/loanCalculate/:id',authCheck,loanCalculate);

module.exports = router;