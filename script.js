// return the element/ parent div that houses both the text box and button.
const parent = document.querySelector(".input");

//return the element of the text box.
const email = document.querySelector(".box");

// return the button element
const button = document.querySelector(".blue");

// adds the error style of all the elements in the class if there is an error in the input
const outputError = () => {
  parent.classList.add("error");
};

// removes the error style of all the element if the input was successful
const outputSuccess = () => {
  parent.classList.remove("error");
};

//runs a test when an input is made for email to check for abnormalities
const validateEmail = (email) => {
  let regEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regEx.test(email.toLowerCase());
};

//runs a check on input in text box based on the condition given
const emailCheck = () => {
  const emailValue = email.value.trim();
  emailValue === "" || !validateEmail(emailValue)
    ? outputError()
    : outputSuccess();
};

//an event listener is created for clicking on the button
button.addEventListener("click", () => {
  emailCheck();
});
