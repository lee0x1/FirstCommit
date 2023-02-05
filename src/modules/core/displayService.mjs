// displayService.mjs

const elementList = {
    jumbotron: ".jumbotron", // begin template elements
    cardContainer: ".row",
    notFound: "#container404",
    template404: "#page404",
    container: "#container",
    cardTemplate: "#card-template",
    card: ".card",
    avatar: "#avatar", // begin data elements
    name: "#name",
    userHandle: "#userhandle",
    commitMsg: "#commitmsg",
    date: "#date",
    repo: "#repo",
    profileUrl: "#profileurl",
    commitUrl: "#commiturl",
    repoUrl: "#repourl",
};

const removeElement = function (selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.remove();
    }
};

const renderTemplate = (selector, template, container) => {
    // check if card exists in dom
    const element = document.querySelector(selector);
    if (!element) {
        container = document.querySelector(container);
        template = document.querySelector(template);
        const clone = template.content.cloneNode(true);
        container.appendChild(clone);
    }
};

const renderData = (data) => {
    // destructure values
    const {
        _avatar,
        _name,
        _userHandle,
        _commitMsg,
        _date,
        _repo,
        _profileUrl,
        _commitUrl,
        _repoUrl,
    } = extractUsefulData(data);

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

    // date format: MM/DD/YYYY
    const prettyDate = convertDate(_date);

    // remove string after new line is encountered
    const msg = _commitMsg.split("\n")[0];

    avatar.src = _avatar;
    name.textContent = _name;
    userHandle.textContent = `@${_userHandle}`;
    commitMsg.textContent = msg;
    date.textContent = prettyDate;
    repo.textContent = _repo;
    profileUrl.href = _profileUrl;
    commitUrl.href = _commitUrl;
    repoUrl.href = _repoUrl;
};

const extractUsefulData = (data) => {
    const firstCommit = data.items[0];
    return {
        _avatar: firstCommit.author.avatar_url,
        _name: firstCommit.commit.author.name,
        _userHandle: firstCommit.author.login,
        _commitMsg: firstCommit.commit.message,
        _date: firstCommit.commit.author.date,
        _repo: firstCommit.repository.name,
        _profileUrl: firstCommit.author.html_url,
        _commitUrl: firstCommit.html_url,
        _repoUrl: firstCommit.repository.html_url,
    };
};

// TODO : move to utilities service???
const convertDate = (utcDate) => {
    let date = new Date(utcDate);
    return date.toLocaleDateString();
};

export const DisplayService = {
    renderTemplate: renderTemplate,
    renderData: renderData,
    removeElement: removeElement,
    elementList: elementList,
};
