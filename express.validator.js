import { body, validationResult } from 'express-validator';

const validationRules = [
  body('name').notEmpty().withMessage('Name is Required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price should be a positive value or cannot be empty'),
];

const validateRequest = async (req, res, next) => {
  await Promise.all(validationRules.map(rule => rule.run(req)));

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('new-product', { errorMessage: errors.array()[0].msg });
  }
  next();
};

export { validateRequest };
