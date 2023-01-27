// displayService.mjs

const renderData = (data) => {
    const content = document.getElementById("content");
    
    // TODO:  destructure values 
    const {  avatar, name , userHandle, commitMsg, date, repo } = extractUsefulData(data);
    
    // date format: MM/DD/YYYY
    const prettyDate = convertDate(date);

    // remove string after new line is encountered
    const msg = commitMsg.split('\n')[0];
    
    // experiment getting data to screen
    content.innerText = avatar + "\n" +
        name + "\n" +
        userHandle + "\n" +
        msg + "\n" +
        prettyDate + "\n" +
        repo + "\n";
}


// TODO : move to utilities service???
const convertDate = (utcDate) => {
    let date = new Date(utcDate);
    return date.toLocaleDateString();
}

const extractUsefulData = (data) => {
    // TODO: fix .commit is undefined when its a orginization repo
    const avatar = data.items[0].author.avatar_url;
    const name = data.items[0].commit.author.name;
    const userHandle = data.items[0].author.login;
    const commitMsg = data.items[0].commit.message;
    const date = data.items[0].commit.author.date;
    const repo = data.items[0].repository.name;
    
    return {
        avatar,
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
