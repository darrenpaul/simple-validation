export function validate(object) {
  if (object.validationType === "name") return nameValidate(object);
  if (object.validationType === "text") return textValidate(object);
  if (object.validationType === "message") return messageValidate(object);
  if (object.validationType === "age") return ageValidate(object);
  if (object.validationType === "number") return numberValidate(object);
  if (object.validationType === "email") return emailValidate(object);
  if (object.validationType === "password") return passwordValidate(object);
  if (object.validationType === "salary") return salaryValidate(object);
}

export function nameValidate(object) {
  let valid = /^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(object.value);
  if (object.required && object.value.length == 0) {
    return { valid: false, message: "input required" };
  }
  if (object.value && object.value.length < 2)
    return { valid: false, message: "text too short" };
  if (object.value && valid === false)
    return { valid: false, message: "invalid characters" };
  return { valid: true, message: "" };
}

export function textValidate(object) {
  let valid = /^.+/.test(object.value);
  if (object.required && object.value.length == 0) {
    return { valid: false, message: "input required" };
  }
  if (object.value && object.value.length < 2)
    return { valid: false, message: "text too short" };
  if (object.value && valid === false)
    return { valid: false, message: "invalid characters" };
  return { valid: true, message: "" };
}

export function messageValidate(object) {
  let valid = /.+/.test(object.value);
  if (object.required && object.value.length == 0) {
    return { valid: false, message: "input required" };
  }
  if (object.value && object.value.length < 2)
    return { valid: false, message: "text too short" };
  if (object.value && valid === false)
    return { valid: false, message: "invalid characters" };
  return { valid: true, message: "" };
}

export function ageValidate(object) {
  let valid = /^[0-9]{1,3}(?=$)/.test(object.value);
  if (object.required && object.value.length == 0) {
    return { valid: false, message: "input required" };
  }
  if (object.value.length > 3)
    return { valid: false, message: "age is to old" };
  if (valid === false) return { valid: false, message: "invalid characters" };
  return { valid: true, message: "" };
}

export function numberValidate(object) {
  let valid = /^[0-9]{1,}(?=$)/.test(object.value);
  if (object.required && object.value.length == 0) {
    return { valid: false, message: "input required" };
  }
  if (valid === false) return { valid: false, message: "invalid characters" };
  return { valid: true, message: "" };
}

export function emailValidate(object) {
  if (object.required && object.value.length == 0) {
    return { valid: false, message: "input required" };
  }
  if (object.value && _emailValidation(object.value) === false)
    return { valid: false, message: "Not valid" };
  if (object.valueRepeat) {
    if (matching(object.value, object.valueRepeat) === false) {
      return { valid: false, message: "emails do not match" };
    }
    if (_emailValidation(object.valueRepeat) === false)
      return { valid: false, message: "Not valid" };
  }
  return { valid: true, message: "" };
}

export function passwordValidate(object) {
  if (object.required && object.value.length == 0) {
    return { valid: false, message: "input required" };
  }
  if (_passwordValidation(object.value) === false)
    return { valid: false, message: "Not valid" };
  if (object.valueRepeat) {
    if (matching(object.value, object.valueRepeat) === false) {
      return { valid: false, message: "passwords do not match" };
    }
    if (_passwordValidation(object.valueRepeat) === false)
      return { valid: false, message: "Not valid" };
  }
  return { valid: true, message: "" };
}

export function salaryValidate(object) {
  let valid = /^0*(?:[2-9]|[1-9]\d\d*)$/.test(object.value);
  if (object.required && object.value.length == 0) {
    return { valid: false, message: "input required" };
  }
  if (object.value && object.value.length < 2)
    return { valid: false, message: "salary too low" };
  if (object.value && valid === false)
    return { valid: false, message: "invalid characters" };
  return { valid: true, message: "" };
}

export function matching(value1, value2) {
  if (value1 === value2) return true;
  return false;
}

function _emailValidation(value) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );
}

function _passwordValidation(value) {
  return /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value);
}
