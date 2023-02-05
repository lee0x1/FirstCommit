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

export const InputService = {
  getInput: getInput,
};
