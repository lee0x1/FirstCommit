// inputService.mjs

const nameInput = document.querySelector("#username-input");
const formSubmit = document.querySelector("#submit-form");

const getInput = (callback) => {
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
