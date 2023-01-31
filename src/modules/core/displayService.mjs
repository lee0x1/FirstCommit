// displayService.mjs

const elementList = {
    jumbotron: '.jumbotron',
    card: '.row',
    page404: '#container404',
}

const removeElement = function(selector) {
    const element = document.querySelector(selector);
    if(element){
        element.remove();
    }
}

const renderTemplate = () => {
  // check if card exists in dom
  if(!document.querySelector('.card')){
    const container = document.querySelector("#container");
    const template = document.querySelector('#card-template');
    const clone = template.content.cloneNode(true);
    container.appendChild(clone);
    }
}

const render404 = () => {
  // check if card exists in dom
  if(!document.querySelector('#container404')){
    const container = document.querySelector("#container");
    const template = document.querySelector('#page404');
    const clone = template.content.cloneNode(true);
    container.appendChild(clone);
}
    
}

const renderData = (data) => {

    // TODO: refractor, maybe use a loop instead
    const avatar = document.querySelector("#avatar");
    const name = document.querySelector("#name");
    const userHandle = document.querySelector("#userhandle");
    const commitMsg = document.querySelector("#commitmsg");
    const date = document.querySelector("#date");
    const repo = document.querySelector("#repo");
    const profileUrl = document.querySelector("#profileurl");
    const commitUrl = document.querySelector("#commiturl");
    const repoUrl = document.querySelector("#repourl");

    // destructure values 
    const {
        _avatar,
        _name ,
        _userHandle,
        _commitMsg,
        _date,
        _repo,
        _profileUrl,
        _commitUrl,
        _repoUrl
    } = extractUsefulData(data);
    
    // date format: MM/DD/YYYY
    const prettyDate = convertDate(_date);

    // remove string after new line is encountered
    const msg = _commitMsg.split('\n')[0];
    
    avatar.src = _avatar;
    name.textContent = _name;
    userHandle.textContent = `@${_userHandle}`;
    commitMsg.textContent = msg;
    date.textContent = prettyDate;
    repo.textContent = _repo;
    profileUrl.href = _profileUrl;
    commitUrl.href = _commitUrl;
    repoUrl.href = _repoUrl;
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
    const _profileUrl = data.items[0].author.html_url;
    const _commitUrl = data.items[0].html_url;
    const _repoUrl = data.items[0].repository.html_url;

    return {
        _avatar,
        _name,
        _userHandle,
        _commitMsg,
        _date,
        _repo,
        _profileUrl,
        _commitUrl,
        _repoUrl
    }
}

export const DisplayService = {
    renderTemplate: renderTemplate,
    renderData: renderData,
    render404: render404,
    elementList: elementList,
    removeElement: removeElement
}
