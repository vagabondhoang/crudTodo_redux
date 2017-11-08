import Joi from 'joi';

export const queryValidator = Joi.object({
  id: Joi.string(),
});

export const payloadValidator = Joi.object({
  title: Joi.string().min(3).max(50).required(),
});

