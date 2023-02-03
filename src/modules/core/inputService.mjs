// inputService.mjs

const nameInput = document.querySelector("#username-input");
const searchBtn = document.querySelector("#searchBtn");
const colorMode = document.querySelector('#color-mode');
const html = document.querySelector('html');

const getInput = (callback) => {  
    // TODO: Refractor to array of addEventListener?
    searchBtn.addEventListener("click", (event) => {
        console.log('clicked')
      handleInput(callback);
    });
    nameInput.addEventListener("keyup", (event) => {
      if(event.key === "Enter"){
        // close popup keyboard on mobile
        console.log("pressed");

        nameInput.blur();
        handleInput(callback);
      }
    });
};

const validateInput = (input) => {
  // valid github usernames return true else return false
  return /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(input);
}

const handleInput = (callback) => {
    let input = nameInput.value;
    let isValid = false;
    if(validateInput(input))
        isValid = true;
    
    callback(input, isValid);
}

export const InputService = {
  getInput: getInput,
  validateInput: validateInput,
}
