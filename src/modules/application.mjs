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
            
            // remove welcome page
            this.displayService.removeJumbo();

            // render template
            this.displayService.renderTemplate();

            // poplulate template with data
            this.displayService.renderData(data);

            // TODO: add better logging
            console.info(data.items[0]);

        });
    }
}

export { Application };