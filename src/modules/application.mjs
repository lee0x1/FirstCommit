// application.mjs

class Application {
    history = [];

    constructor(inputService, dataService, displayService, utilityService) {
        this.inputService = inputService;
        this.dataService = dataService;
        this.displayService = displayService;
        this.utilityService = utilityService;
        // TODO: add better logging
        console.info(`app::running`);
    }

    run() {
        this.inputService.getInput(async (input) => {

            const username = this.utilityService.constructUrl(input);
            const data = await this.dataService.getData(fetch, username);
            this.displayService.renderData(data);
            console.info(data.items[0]);

        });
    }
}

export { Application };