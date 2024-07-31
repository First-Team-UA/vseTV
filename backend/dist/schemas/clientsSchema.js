"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordSchema = exports.updateInfoSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const multipleEmailsRegex = new RegExp(`^(${emailRegex.source})(,\\s*${emailRegex.source})*$`);
const phoneRegex = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?[\d-.\s]{7,}$/;
const multiplePhonesRegex = new RegExp(`^(${phoneRegex.source})(,\\s*${phoneRegex.source})*$`);
exports.updateInfoSchema = joi_1.default.object({
    contact_email_tech: joi_1.default.string()
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
    contact_email_fin: joi_1.default.string()
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
    contact_tel_tech: joi_1.default.string()
        .pattern(multiplePhonesRegex)
        .trim()
        .label('Your technical telephone number')
        .messages({
        'any.required': 'Please provide your technical telephone number',
        'string.email': 'Please provide a valid technical telephone number',
    }),
    contact_tel_fin: joi_1.default.string()
        .pattern(multiplePhonesRegex)
        .trim()
        .label('Your financial telephone number')
        .messages({
        'any.required': 'Please provide your financial telephone number',
        'string.email': 'Please provide a valid financial telephone number',
    }),
    name: joi_1.default.string()
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
exports.changePasswordSchema = joi_1.default.object({
    oldPassword: joi_1.default.string()
        .alphanum()
        .label('Your password')
        .min(8)
        .max(64)
        .messages({
        'any.required': 'Please provide your outdated password',
        'string.alphanum': 'Please only use numbers and letters for the password.',
        'string.min': 'Password must be between 8 and 64 characters long',
        'string.max': 'Password must be between 8 and 64 characters long',
    }),
    newPassword: joi_1.default.string()
        .alphanum()
        .label('Your password')
        .min(8)
        .max(64)
        .messages({
        'any.required': 'Please provide your new password',
        'string.alphanum': 'Please only use numbers and letters for the password.',
        'string.min': 'Password must be between 8 and 64 characters long',
        'string.max': 'Password must be between 8 and 64 characters long',
    }),
});
