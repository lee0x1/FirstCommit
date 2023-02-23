// main.mjs

import { Input } from "./modules/core/input.mjs";
import { Utils } from "./modules/core/utils.mjs";
import { Data } from "./modules/core/data.mjs";
import { Display } from "./modules/core/display.mjs";

import { Application } from "./modules/application.mjs";

// run app
(() => {
    new Application(
        Input,
        Data,
        Display,
        Utils
    ).run();
})();
