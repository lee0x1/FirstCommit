// inputService.mjs

const nameInput = document.querySelector("input");
const searchBtn = document.querySelector(".btn");

const getInput = (callback) => {  
    // TODO: Refractor to array of addEventListener?
    searchBtn.addEventListener("click", (event) => {
      handleInput(callback);
    });
    nameInput.addEventListener("keyup", (event) => {
      if(event.key === "Enter")
      // close popup keyboard on mobile
      event.target.blur();
        handleInput(callback);
    });
};

const handleInput = (callback) => {
  let username;
  username = nameInput.value;
  nameInput.value = '';
  callback(username);
  console.info(`first commit for ${username}`)
}

export const InputService = {
  getInput: getInput,
}
