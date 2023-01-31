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
        this.inputService.getInput(async (input, isValid) => {
            try {
                if(!isValid){
                    // TODO: notify user on page username not valid
                    throw new Error(`invalid github username`);
                }

                const username = this.utilityService.constructUrl(input);
                const data = await this.dataService.getData(fetch, username);
                
                // cant find user then...
                if(data.items === undefined || data.items.length === 0){
                    // remove welcome page
                    this.displayService.removeElement(this.displayService.elementList.jumbotron);
                    
                    // remove card
                    this.displayService.removeElement(this.displayService.elementList.card);
                    
                    // render 404 page
                    this.displayService.renderTemplate(
                        this.displayService.elementList.container404,
                        this.displayService.elementList.template404,
                        this.displayService.elementList.container,
                    );

                    throw new Error(`username not found!`);
                } else {
                    // remove welcome page
                    this.displayService.removeElement(this.displayService.elementList.jumbotron);

                    // remove 404 page
                    this.displayService.removeElement(this.displayService.elementList.notFound);

                    // render card
                    this.displayService.renderTemplate(
                        this.displayService.elementList.card,
                        this.displayService.elementList.cardTemplate,
                        this.displayService.elementList.container,
                    );

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