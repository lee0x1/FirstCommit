// inputService.mjs

const nameInput = document.querySelector("#username-input");
const formSubmit = document.querySelector("#submit-form");
const searchBtn = document.querySelector("#searchBtn");
const colorMode = document.querySelector("#color-mode");
const html = document.querySelector("html");

const getInput = (callback) => {
  // TODO: Refractor to array of addEventListener?
    formSubmit.addEventListener("submit", (event) => {
        console.log('username submitted');
        nameInput.blur();
        event.preventDefault();
        callback(nameInput.value);
  });
};

// const validateInput = (input) => {
//   // valid github usernames return true else return false
//   return /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])[\s]){0,38}$/i.test(input);
// };

// const handleInput = (callback) => {
//   let input = nameInput.value;
// //   let isValid = false;
// //   if (validateInput(input)) isValid = true;

//   callback(input);
// };

export const InputService = {
  getInput: getInput,
};
