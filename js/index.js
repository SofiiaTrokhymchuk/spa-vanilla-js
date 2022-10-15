import { teamInfo } from "./team.js";

function navigateTo(url){
    history.pushState(null, null, url);
    router();
}

async function router(){
    const ROUTES = [
        {path: "/", view: teamInfo.team},
        {path: "/sofiia", view: teamInfo.sofiia},
        {path: "/denis", view: teamInfo.denis},
        {path: "/udjiniia", view: teamInfo.udjiniia}
    ];
    let match = ROUTES.find(route => location.pathname === route.path);
    if(!match){
        match = ROUTES[0];
        location.pathname = match.path;
    }
    document.title = match.view.pageTitle;
    document.querySelector(".content-container").innerHTML =  match.view.pageHTML;
}

function main(){
    window.addEventListener("popstate", router);
    document.querySelector('nav').addEventListener("click", event => {
        if(event.target.matches("[data-link]")){
            event.preventDefault();
            navigateTo(event.target.href);
        }
    })
    navigateTo(location.pathname);
}

main();
