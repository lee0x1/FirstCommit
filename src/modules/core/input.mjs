// input.mjs

const mainHandler = (callback) => {
    const usernameInput = document.querySelector("#username-input");
    const formToSubmit = document.querySelector("#submit-form");

    setupRegExpr(usernameInput);
    validateInput(usernameInput);
    resetValidation(usernameInput);
    submitForm([usernameInput, formToSubmit], callback);
};

const setupRegExpr = (input) => {
    // set regexpr pattern input validation
    input.setAttribute(
        "pattern",
        // TODO: explain what this does step by step
        "^[A-Za-z\\d](?:[A-Za-z\\d]|-(?=[A-Za-z\\d])){0,38}$"
    );
};

const validateInput = (input) => {
    // once its invalid
    input.addEventListener("invalid", () => {
        const validityState = input.validity;

        if (validityState.valueMissing) {
            input.setCustomValidity("required");
        } else if (validityState.patternMismatch) {
            input.setCustomValidity("enter valid github username");
        } else if (validityState.tooShort) {
            input.setCustomValidity("too short");
        } else if (validityState.tooLong) {
            input.setCustomValidity("too long");
        }
    });
};

const resetValidation = (input) => {
    // remove validation tooltip when typing again unless still error
    input.addEventListener("input", () => {
        input.setCustomValidity("");
    });
};

const submitForm = ([input, form], callback) => {
    // submit form after validation pass. send callback
    form.addEventListener("submit", (event) => {
        console.info("username submitted");

        input.blur();
        event.preventDefault();
        form.checkValidity();
        callback(input.value);
    });
};

export const Input = {
    mainHandler: mainHandler,
};
