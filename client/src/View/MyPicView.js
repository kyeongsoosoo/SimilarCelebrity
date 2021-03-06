import { qs } from "../helpers";
import View from "./View";

export default class MyPicView extends View {
    constructor(){
        super(qs(".mypic-view"));

        this.template = new Template();
    }

    show(src) {
        this.element.innerHTML = this.template.getPic(src);
        super.show();
    }
}

class Template {
    getPic(src) {
        return `
            <img class="my-pic" src = ${src} alt="my-pic"/>
        `
    }
}