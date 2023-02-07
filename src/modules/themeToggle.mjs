/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 *
 * Modified by Lee Howard - 2/3/23
 */

(() => {
    "use strict";

    const storedTheme = localStorage.getItem("theme");
        const colorTogglerLabel = document.querySelector("#color-mode-label");

    const getPreferredTheme = () => {
        if (storedTheme) {
            return storedTheme;
        }

        return window.matchMedia("(prefers-color-scheme: light)").matches
            ? "light"
            : "dark";
    };

    const setTheme = function (theme) {
        if (
            theme === "light" &&
            window.matchMedia("(prefers-color-scheme: light)").matches
        ) {
            document.documentElement.setAttribute("data-bs-theme", "light");
                colorTogglerLabel.textContent = "Light Mode";
        } else {
            document.documentElement.setAttribute("data-bs-theme", "dark");
                colorTogglerLabel.textContent = " Dark Mode";
        }
    };


    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", () => {
            if (storedTheme !== "light" || storedTheme !== "dark") {
                setTheme(getPreferredTheme());
            }
        });

    window.addEventListener("DOMContentLoaded", () => {
        // fix: set theme immedaitly dont see light theme first
        setTheme(getPreferredTheme());

        const colorToggler = document.querySelector("#color-mode");
        // set toggle on if local storage theme preference is dark
        if (getPreferredTheme() === "dark") colorToggler.checked = true;

        colorToggler.addEventListener("click", (e) => {
            if (e.target.checked) {
                document.documentElement.setAttribute("data-bs-theme", "dark");
            } else {
                document.documentElement.setAttribute("data-bs-theme", "light");
            }
            const theme =
                document.documentElement.getAttribute("data-bs-theme");
            localStorage.setItem("theme", theme);
            setTheme(theme);
            console.log(theme);
        });
    });
})();
