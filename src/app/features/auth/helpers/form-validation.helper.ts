import { SigninFormField } from '../enums/form-fields.enum';
import { AuthSignInParams } from '../../../core/auth/models/auth.model';

interface FormErrors {
  [SigninFormField.Email]?: string;
  [SigninFormField.Password]?: string;
}

function validateEmail(
  values: AuthSignInParams,
  field: SigninFormField,
  errors: FormErrors
): FormErrors {
  if (!values[field]) {
    errors[field] = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[field])) {
    errors[field] = 'Invalid email address';
  }
  return errors;
}

function validatePassword(
  values: AuthSignInParams,
  field: SigninFormField,
  errors: FormErrors
): FormErrors {
  if (!values[field]) {
    errors[field] = 'Required';
  } else if (values[field].length < 8) {
    errors[field] = 'Must be 8 or more characters';
  }
  return errors;
}

export function validateSigninForm(values: AuthSignInParams) {
  const errors: FormErrors = {};
  validateEmail(values, SigninFormField.Email, errors);
  validatePassword(values, SigninFormField.Password, errors);

  return errors;
}
