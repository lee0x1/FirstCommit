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
        this.inputService.mainHandler(async (input) => {
            try {
                const username = this.utilityService.constructUrl(input);
                const data = await this.dataService.getData(fetch, username);

                // check if user exists
                if (data.items === undefined || data.items.length === 0) {
                    // user not found

                    // remove 404 page
                    this.displayService.removeElement(
                        this.displayService.elementList.notFound
                    );

                    // remove welcome page
                    this.displayService.removeElement(
                        this.displayService.elementList.jumbotron
                    );

                    // remove card
                    this.displayService.removeElement(
                        this.displayService.elementList.card
                    );

                    // render 404 page
                    this.displayService.renderTemplate(
                        this.displayService.elementList.container404,
                        this.displayService.elementList.template404,
                        this.displayService.elementList.container
                    );

                    throw new Error(`username not found!`);
                } else {
                    // user exists

                    // remove welcome page
                    this.displayService.removeElement(
                        this.displayService.elementList.jumbotron
                    );

                    // remove 404 page
                    this.displayService.removeElement(
                        this.displayService.elementList.notFound
                    );

                    // render card
                    this.displayService.renderTemplate(
                        this.displayService.elementList.card,
                        this.displayService.elementList.cardTemplate,
                        this.displayService.elementList.container
                    );

                    // poplulate template with data
                    this.displayService.renderData(data);

                    // TODO: add better logging
                    console.info(data.items[0]);
                }
                // }
            } catch (error) {
                // TODO: Handle error, pass something to show 404 in renderer maybe
                console.error(error);
            }
        });
    }
}

export { Application };
