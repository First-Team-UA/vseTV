import Joi from '@hapi/joi';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const multipleEmailsRegex = new RegExp(
  `^(${emailRegex.source})(,\\s*${emailRegex.source})*$`,
);

const phoneRegex = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?[\d-.\s]{7,}$/;

const multiplePhonesRegex = new RegExp(`^(${phoneRegex.source})(,\\s*${phoneRegex.source})*$`);

export const updateInfoSchema = Joi.object({
  contact_email_tech: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: true },
    })
    .trim()
    .pattern(multipleEmailsRegex)
    .label('Your technical email')
    .messages({
      'any.required': 'Please provide your technical email',
      'string.email': 'Please provide a valid email address',
    }),
  contact_email_fin: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: true },
    })
    .trim()
    .pattern(multipleEmailsRegex)
    .label('Your financial email')
    .messages({
      'any.required': 'Please provide your financial email',
      'string.email': 'Please provide a valid email address',
    }),
  contact_tel_tech: Joi.string()
    .pattern(multiplePhonesRegex)
    .trim()
    .label('Your technical telephone number')
    .messages({
      'any.required': 'Please provide your technical telephone number',
      'string.email': 'Please provide a valid technical telephone number',
    }),
  contact_tel_fin: Joi.string()
    .pattern(multiplePhonesRegex)
    .trim()
    .label('Your financial telephone number')
    .messages({
      'any.required': 'Please provide your financial telephone number',
      'string.email': 'Please provide a valid financial telephone number',
    }),
  name: Joi.string()
    .regex(/^[a-zA-Z0-9\s]*$/)
    .label('Your name')
    .min(1)
    .max(20)
    .messages({
      'any.required': 'Please provide your name',
      'string.alphanum': 'Please only use numbers and letters for the name.',
      'string.min': 'Name must be between 1 and 20 characters long',
      'string.max': 'Name must be between 1 and 20 characters long',
    }),
});

export const changePasswordSchema = Joi.object({
  oldPassword: Joi.string()
    .alphanum()
    .label('Your password')
    .min(8)
    .max(64)
    .messages({
      'any.required': 'Please provide your outdated password',
      'string.alphanum':
        'Please only use numbers and letters for the password.',
      'string.min': 'Password must be between 8 and 64 characters long',
      'string.max': 'Password must be between 8 and 64 characters long',
    }),
  newPassword: Joi.string()
    .alphanum()
    .label('Your password')
    .min(8)
    .max(64)
    .messages({
      'any.required': 'Please provide your new password',
      'string.alphanum':
        'Please only use numbers and letters for the password.',
      'string.min': 'Password must be between 8 and 64 characters long',
      'string.max': 'Password must be between 8 and 64 characters long',
    }),
});
