import * as Yup from 'yup';

import { FormField } from '../enums/form-fields.enum';

interface ValidationSchema {
  [field: string]: Yup.StringSchema | Yup.NumberSchema | Yup.DateSchema;
}

enum ValidationError {
  Required = 'Required',
  EmailInvalid = 'Invalid email address',
  PasswordMin = 'Must be 8 or more characters',
  PasswordMatch = 'Passwords must match',
}

/**
 * Validation shemas referenc object for a number of form fields which are commom
 * throughout the app.
 */
const validationSchema: ValidationSchema = {
  [FormField.Password]: Yup.string()
    .min(8, ValidationError.PasswordMin)
    .required(ValidationError.Required),
  [FormField.PasswordConfirm]: Yup.string()
    .min(8, ValidationError.PasswordMin)
    .required(ValidationError.Required)
    .oneOf([Yup.ref(FormField.Password), null], ValidationError.PasswordMatch),
  [FormField.Email]: Yup.string()
    .email(ValidationError.EmailInvalid)
    .required(ValidationError.Required),
  [FormField.FirstName]: Yup.string().required(ValidationError.Required),
  [FormField.LastName]: Yup.string().required(ValidationError.Required),
};

/**
 * Generates relevant validation shemas from a given list of field names.
 */
function getValidationSchemaByFields(fields: FormField[]): ValidationSchema {
  return fields.reduce(
    (accum, field: FormField) => ({ ...accum, [field]: validationSchema[field] }),
    {} as ValidationSchema
  );
}

/**
 * Returns the validation schemas generated for a given list of field names in Yup Object
 * Schema format, ready for use in formik configs.
 */

export function getValidationSchema(fields: FormField[]): Yup.ObjectSchema {
  return Yup.object(getValidationSchemaByFields(fields));
}
