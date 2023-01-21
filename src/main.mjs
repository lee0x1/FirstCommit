// main.mjs

import { InputService } from './modules/core/inputService.mjs';
import { UtilityService } from './modules/core/utilityService.mjs';
import { DataService } from './modules/core/dataService.mjs';
import { DisplayService } from './modules/core/displayService.mjs';

import { Application } from './modules/application.mjs';

// run app
(()=>{
    new Application(
        InputService,
        DataService,
        DisplayService,
        UtilityService).run();
})()
