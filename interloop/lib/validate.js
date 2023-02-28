export default function login_validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@(interloop)+\.[ai]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Password must be between 8 and 20 characters in length';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid password';
  }

  return errors;
}

export function register_validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.includes(' ')) {
    errors.username = 'Invalid username';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@(interloop)+\.[ai]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Password must be between 8 and 20 characters in length';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid password';
  }

  if (!values.cpassword) {
    errors.cpassword = 'Required';
  } else if (values.password !== values.cpassword) {
    errors.cpassword = 'Passwords must match';
  } else if (values.cpassword.includes(' ')) {
    errors.cpassword = 'invalid password';
  }
  return errors;
}
