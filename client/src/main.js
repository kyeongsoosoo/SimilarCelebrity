import Controller from "./Controller";
import Store from "./Store";
import '../style.css';
import ButtonView from "./View/ButtonView";
import MyPicView from "./View/MyPicView";
import CelebView from "./View/CelebView";

document.addEventListener("DOMContentLoaded", main);

function main() {
    const store = new Store();

    const views = {
        buttonView : new ButtonView(),
        myPicView : new MyPicView(),
        celebView : new CelebView(),
    };

    new Controller(store, views);
}