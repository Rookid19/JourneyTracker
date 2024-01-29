export default function useValidate(values: {
  firstName: string;
  lastName: string;
  dob: string;
}) {
  let errors: {
    firstName?: string;
    firstNameLength?: string;
    lastName?: string;
    lastNameLength?: string;
    dob?: string;
  } = {};

  //first name validation
  if (!values.firstName.trim()) {
    errors.firstName = "First name is required";
  } else if (values.firstName.length < 2) {
    errors.firstNameLength = "First name must be 2 characters long";
  }

  //last name validation
  if (!values.lastName.trim()) {
    errors.lastName = "Last name is required";
  } else if (values.lastName.length < 2) {
    errors.lastNameLength = "Last name must be 2 characters long";
  }

  // dob validation
  if (!values.dob.trim()) {
    errors.dob = "Date of birth is required";
  }

  return errors;
}
