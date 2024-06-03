import Joi from "@hapi/joi";

export const updateInfoSchema = Joi.object({
    contact_email_tech: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: true },
    })
    .trim()
    .label("Your email")
    .messages({
      "any.required": "Please provide your email",
      "string.email": "Please provide a valid email address",
    }),
    contact_email_fin: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: true },
    })
    .trim()
    .label("Your email")
    .messages({
      "any.required": "Please provide your email",
      "string.email": "Please provide a valid email address",
    }),
    contact_tel_tech: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: true },
    })
    .trim()
    .label("Your email")
    .messages({
      "any.required": "Please provide your email",
      "string.email": "Please provide a valid email address",
    }),
    contact_tel_fin: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: true },
    })
    .trim()
    .label("Your email")
    .messages({
      "any.required": "Please provide your email",
      "string.email": "Please provide a valid email address",
    }),
  name: Joi.string()
    .regex(/^[a-zA-Z0-9\s]*$/)
    .label("Your name")
    .min(1)
    .max(20)
    .messages({
      "any.required": "Please provide your name",
      "string.alphanum": "Please only use numbers and letters for the name.",
      "string.min": "Name must be between 1 and 20 characters long",
      "string.max": "Name must be between 1 and 20 characters long",
    }),
})

export const changePasswordSchema = Joi.object({
    oldPassword: Joi.string()
    .alphanum()
    .label("Your password")
    .min(8)
    .max(64)
    .messages({
      "any.required": "Please provide your outdated password",
      "string.alphanum":
        "Please only use numbers and letters for the password.",
      "string.min": "Password must be between 8 and 64 characters long",
      "string.max": "Password must be between 8 and 64 characters long",
    }),
  newPassword: Joi.string()
    .alphanum()
    .label("Your password")
    .min(8)
    .max(64)
    .messages({
      "any.required": "Please provide your new password",
      "string.alphanum":
        "Please only use numbers and letters for the password.",
      "string.min": "Password must be between 8 and 64 characters long",
      "string.max": "Password must be between 8 and 64 characters long",
    }),
})