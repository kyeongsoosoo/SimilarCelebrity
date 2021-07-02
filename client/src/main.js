import Controller from "./Controller";
import Store from "./Store";
import '../style.css';

document.addEventListener("DOMContentLoaded", main);

function main() {
    const store = new Store();

    const views = {

    };

    new Controller(store, views);
}