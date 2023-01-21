// inputService.mjs

const getInput = (callback) => {
    let username;
    const searchForm = document.querySelector("form");

    searchForm.addEventListener("submit", (event) => {
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
