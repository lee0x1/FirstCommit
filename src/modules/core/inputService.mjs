// inputService.mjs

const getInput = (callback) => {
    let username;
    const searchBtn = document.querySelector(".btn");
    // TODO: Enter key fire click event
    searchBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const nameInput = document.querySelector("input");
      username = nameInput.value;
      nameInput.value = '';
      callback(username);
      console.info(`first commit for ${username}`)
    });
};

export const InputService = {
  getInput: getInput,
}
