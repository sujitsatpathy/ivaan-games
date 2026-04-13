let homeLinks = [
    { name: "Multiplication Practice", url: "multiplication/index.html" },
    { name: "Addition Practice", url: "addition/index.html" },
    { name: "Country Capitals Quiz", url: "capitals/index.html" },
    { name: "Country Flags Quiz", url: "flags/index.html" },
    { name: "Verbal Reasoning Activities", url: "reasoning/verbal/index.html" },
    { name: "Non-Verbal Reasoning Activities", url: "reasoning/non-verbal/index.html" }
];

function createHomePage() {
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.margin = '50px';

    const heading = document.createElement('h1');
    heading.innerText = 'Welcome to Educational Activities!';
    container.appendChild(heading);

    const description = document.createElement('p');
    description.innerText = 'Choose an activity to start learning:';
    container.appendChild(description);

    const list = document.createElement('ul');
    homeLinks.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.innerText = link.name;
        listItem.appendChild(anchor);
        list.appendChild(listItem);
    });
    container.appendChild(list);

    document.body.appendChild(container);
}

document.addEventListener('DOMContentLoaded', createHomePage);