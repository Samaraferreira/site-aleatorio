function handleSubmit() {
  const form = document.getElementById("form");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const address = document.getElementById("address");
  const date = document.getElementById("date");
  const time = document.getElementById("time");

  const titleIsValid = validator(title)
  const descriptionIsValid = validator(description)
  const addressIsValid = validator(address)
  const dateIsValid = validator(date)
  const timeIsValid = validator(time)

  if (titleIsValid
    && descriptionIsValid
    && addressIsValid
    && dateIsValid
    && timeIsValid) {
      form.reset();
      alert("Evento cadastrado");
  } else {
    return;
  }
}

function validator(input) {
  if (isEmpty(input.value)) {
    addRedBorder(input);
    return false;
  } else {
    addGreenBorder(input);
    return true;
  }
}

function isEmpty(value) {
  return value === null || value === ""
}

function addRedBorder(input) {
  input.style.borderColor = "red";
}

function addGreenBorder(input) {
  input.style.borderColor = "#1F8C6B";
}
