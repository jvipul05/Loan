const express = require('express');
const router = express.Router();

const{register} = require('../controllers/register');

const { login } = require('../controllers/login');

/**
 * @swagger
 * /api/v1/users/register:
 *   post:
 *     summary: Register a new user
 *     description: Registers a new user with the specified details including name, email, phone number, and password.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Vipul Jain"
 *                 description: The name of the user.
 *               email:
 *                 type: string
 *                 example: "jvipul12@gmail.com"
 *                 description: The email address of the user.
 *               phone:
 *                 type: string
 *                 example: "7470360538"
 *                 description: The phone number of the user.
 *               password:
 *                 type: string
 *                 example: "Vip@2002"
 *                 description: The password for the user's account.
 *     responses:
 *       201:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The user ID.
 *                 name:
 *                   type: string
 *                   description: The name of the user.
 *                 email:
 *                   type: string
 *                   description: The email address of the user.
 *                 phone:
 *                   type: string
 *                   description: The phone number of the user.
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the user was registered.
 *       400:
 *         description: Bad Request - Invalid input
 *       500:
 *         description: Internal Server Error
 */

router.post('/register', register);

/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     summary: Login a user
 *     description: Authenticates a user with the provided email and password.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "jvipul@gmail.com"
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 example: "Vip@2002"
 *                 description: The password for the user's account.
 *     responses:
 *       200:
 *         description: User successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for authenticated requests.
 *       400:
 *         description: Bad Request - Invalid email or password
 *       401:
 *         description: Unauthorized - Incorrect email or password
 *       500:
 *         description: Internal Server Error
 */
router.post('/login', login);


module.exports = router;