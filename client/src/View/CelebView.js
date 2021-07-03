import { qs } from "../helpers";
import View from "./View";

export default class CelebView extends View {
    constructor(){
        super(qs(".celeb-view"));

        this.template = new Template();
    }

    show(src) {
        this.element.innerHTML = this.template.getList(src);
        super.show();
    }
}

class Template {
    getList(src = []){
        return `
            <ul class="celeb-list">
                ${src.map(this._getItem).join("")}
            </ul>
        `;
    }

    _getItem(src) {
        console.log(src);
        return `
            <li data-keyword="${src}">
                <img src='${src}'/>
            </li>
        
        `;
    }
}