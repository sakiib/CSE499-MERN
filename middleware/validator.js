const { check, validationResult } = require('express-validator');

exports.signupValidator = [
    check('username')
        .not().isEmpty()
        .trim()
        .withMessage('All fields required'),
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('invalid email'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('password must be atleast six characters long')
];

exports.validatorResult = (req, res, next) => {
    const result = validationResult(req);
    const hasErrors = result.isEmpty();
    if (hasErrors) {
        const firstError = result.array()[0].msg;
        return res.status(400).json({
            errorMessage: firstError,
        });
    } 
    next();
};