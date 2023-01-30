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
            try {
                const username = this.utilityService.constructUrl(input);
                const data = await this.dataService.getData(fetch, username);
                
                if(data.items === undefined || data.items.length === 0){
                    // remove welcome page
                    this.displayService.removeElement(this.displayService.elementList.jumbotron);

                    this.displayService.removeCard();
                    this.displayService.render404();

                    throw new Error(`username not found!`);
                } else {
                    // remove welcome page
                    this.displayService.removeElement(this.displayService.elementList.jumbotron);

                    // remove 404 
                    this.displayService.remove404();

                    // render template
                    this.displayService.renderTemplate();

                    // poplulate template with data
                    this.displayService.renderData(data);

                    // TODO: add better logging
                    console.info(data.items[0]);
                }
            } catch (error) {
                // TODO: Handle error, pass something to show 404 in renderer maybe
                console.error(error);
            }
        });
    }
}

export { Application };