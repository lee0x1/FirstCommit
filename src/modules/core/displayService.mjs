// displayService.mjs

const removeJumbo = () => {
    const jumbo = document.querySelector('.jumbotron');
    jumbo.remove();
}
  
const renderTemplate = () => {
    const container = document.querySelector("#container");
    const template = document.querySelector('#card-template');
    const clone = template.content.cloneNode(true);
    container.appendChild(clone);
}

const renderData = (data) => {

    // TODO: refractor, maybe use a loop instead
    const avatar = document.querySelector("#avatar");
    const name = document.querySelector("#name");
    const userHandle = document.querySelector("#userhandle");
    const commitMsg = document.querySelector("#commitmsg");
    const date = document.querySelector("#date");
    const repo = document.querySelector("#repo");

    // destructure values 
    const {  _avatar, _name , _userHandle, _commitMsg, _date, _repo } = extractUsefulData(data);
    
    // date format: MM/DD/YYYY
    const prettyDate = convertDate(_date);

    // remove string after new line is encountered
    const msg = _commitMsg.split('\n')[0];
    
    avatar.textContent = _avatar;
    name.textContent = _name;
    userHandle.textContent = `@${_userHandle}`;
    commitMsg.textContent = msg;
    date.textContent = prettyDate;
    repo.textContent = _repo
}

// TODO : move to utilities service???
const convertDate = (utcDate) => {
    let date = new Date(utcDate);
    return date.toLocaleDateString();
}

const extractUsefulData = (data) => {
    // TODO: fix .commit is undefined when its a orginization repo
    const _avatar = data.items[0].author.avatar_url;
    const _name = data.items[0].commit.author.name;
    const _userHandle = data.items[0].author.login;
    const _commitMsg = data.items[0].commit.message;
    const _date = data.items[0].commit.author.date;
    const _repo = data.items[0].repository.name;
    
    return {
        _avatar,
        _name,
        _userHandle,
        _commitMsg,
        _date,
        _repo
    }
}

export const DisplayService = {
    removeJumbo: removeJumbo,
    renderTemplate: renderTemplate,
    renderData: renderData,
}
