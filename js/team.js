const headerClass = "content-header";
const paragraphClass = "content-paragraph";
const imgClass = "content-img";

export const teamInfo = {
    team: {
        pageTitle: "Team Info",
        pageHTML: `
            <h1 class="${headerClass}">Brief Team Info</h1>
            <p class="${paragraphClass}">Hi! We are Team №21 and we are from group IA-94. Our team members are:</p>
            <ul class="members-list">
                <li>Sofiia Trokhymchuk</li>
                <li>Denis Vasyliev</li>
                <li>Udjiniia Hryaznova</li>
            </ul>
            <p class="${paragraphClass}">Click on the sidebar menu to check out about each member more detailed.</p>
        `
    },
    sofiia: {
        pageTitle: "Sofiia",
        pageHTML: `
            <h1 class="${headerClass}">Sofiia Trokhymchuk</h1>
            <p class="${paragraphClass}">My name is Sonia. I'm a 4 grade student of KPI.<br>I like drawing, cats and drawing cats.</p>
            <img class="${imgClass}" src="https://media4.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif?cid=ecf05e47zde0852tonjyrv79oi8rgnonjez6lrbcoqa6h2ib&rid=giphy.gif&ct=g" alt="Funny cats">
        `
    },
    denis: {
        pageTitle: "Denis",
        pageHTML: `
            <h1 class="${headerClass}">Denis Vasyliev</h1>
            <p class="${paragraphClass}">My name is Denis and I like watching "Chainsaw Man".</p>
        `
    },
    udjiniia: {
        pageTitle: "Udjiniia",
        pageHTML: `
                <h1 class="${headerClass}">Udjiniia Hryaznova</h1>
                <p class="${paragraphClass}">Hi, my name is Udjiniia. Welcome to my page!</p>
            `
    }
};
