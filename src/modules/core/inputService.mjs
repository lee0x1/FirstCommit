// inputService.mjs

const nameInput = document.querySelector("#username-input");
const formSubmit = document.querySelector("#submit-form");

const getInput = (callback) => {
    // set regexpr pattern input validation
    nameInput.setAttribute(
        "pattern",
        // TODO: explain what this does step by step
        "^[A-Za-z\\d](?:[A-Za-z\\d]|-(?=[A-Za-z\\d])){0,38}$"
    );
    
    // once its invalid 
    nameInput.addEventListener("invalid", () => {
        const validityState = nameInput.validity;

        if (validityState.valueMissing) {
            nameInput.setCustomValidity("required");
        } else if (validityState.patternMismatch) {
            nameInput.setCustomValidity("enter valid github username");
        } else if (validityState.tooShort) {
            nameInput.setCustomValidity("too short");
        } else if (validityState.tooLong) {
            nameInput.setCustomValidity("too long");
        }
    });

    // remove validation tooltip when typing again unless still error
    nameInput.addEventListener("input", () => {
        nameInput.setCustomValidity("");
    });

    // submit form after validation pass. send callback
    formSubmit.addEventListener("submit", (event) => {
        console.info("username submitted");

        nameInput.blur();
        event.preventDefault();
        formSubmit.checkValidity();
        callback(nameInput.value);
    });
};

export const InputService = {
    getInput: getInput,
};
