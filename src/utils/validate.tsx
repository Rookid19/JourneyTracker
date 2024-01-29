export default function Validate(values) {
  let errors = {};

  //first name validation
  if (!values.firstname.trim()) {
    errors.firstname = "First name is required";
  } else if (values.firstname.length < 2) {
    errors.firstnameLength = "First name must be 2 characters long";
  }

  //last name validation
  if (!values.lastname.trim()) {
    errors.lastname = "Last name is required";
  } else if (values.lastname.length < 2) {
    errors.lastnameLength = "Last name must be 2 characters long";
  }

  return errors;
}
