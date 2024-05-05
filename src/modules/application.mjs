// application.mjs

class Application {

    constructor(input, data, display, utils) {
        this.input = input;
        this.data = data;
        this.display = display;
        this.utils = utils;
        // TODO: add better logging
        console.info(`app::running`);
    }

    run() {
        this.input.mainHandler(async (input) => {
            try {
                const username = this.utils.constructUrl(input);
                const data = await this.data.getData(fetch, username);
                const userNotFound = data.items === undefined || data.items.length === 0;

                // check if user exists
                if (userNotFound) {
                    // user not found

                    // remove uneeded elements
                    this.display.removeElements(
                        // remove 404 page
                        this.display.elementList.notFound,
                        // remove welcome page
                        this.display.elementList.jumbotron,
                        // remove card
                        this.display.elementList.card,
                        // remove text and button from page bottom
                        this.display.elementList.additionalInfo
                    );

                    // render 404 page
                    this.display.renderTemplate(
                        this.display.elementList.container404,
                        this.display.elementList.template404,
                        this.display.elementList.container
                    );
                  
                    throw new Error(`username not found!`);
                } else {
                    // user found

                    // remove uneeded elements
                    this.display.removeElements(
                        // remove welcome page
                        this.display.elementList.jumbotron,
                        // remove 404 page
                        this.display.elementList.notFound,
                        // remove text and button from page bottom
                        this.display.elementList.additionalInfo
                    );

                    // render card
                    this.display.renderTemplate(
                        this.display.elementList.card,
                        this.display.elementList.cardTemplate,
                        this.display.elementList.container
                    );

                    // poplulate template with data
                    this.display.renderData(data);

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
