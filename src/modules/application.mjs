// application.mjs

class Application {
    constructor(inputService, dataService, utilityService) {
        this.inputService = inputService;
        this.dataService = dataService;
        this.utilityService = utilityService;
        // TODO: add better logging
        console.info(`app::running`);
    }

    run() {
        this.inputService.getInput(async (input) => {
            const username = this.utilityService.constructUrl(input);
            const data = await this.dataService.getData(fetch, username);
            // TODO: render data
            console.log(data);
        });
    }
}

export { Application };