// displayService.mjs

const renderData = (data) => {
    const getElm = document.getElementById("content");
    getElm.textContent = JSON.stringify(extractUsefulData(data), null, 4);
}

const extractUsefulData = (data) => {
    const name = data.items[0].commit.author.name;
    const userHandle = data.items[0].author.login;
    const commitMsg = data.items[0].commit.message;
    const date = data.items[0].commit.author.date;
    const repo = data.items[0].repository.name;
    
    return {
        name,
        userHandle,
        commitMsg,
        date,
        repo
    }
}

export const DisplayService = {
    renderData: renderData,
}
