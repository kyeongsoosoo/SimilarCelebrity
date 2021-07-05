import { qs } from "../helpers";
import View from "./View";

export default class CelebView extends View {
    constructor(){
        super(qs(".celeb-view"));

        this.template = new Template();
    }

    show(src,celebName, celebMatch) {
        this.element.innerHTML = this.template.getList(src,celebName,celebMatch);
        super.show();
    }
}

class Template {
    getList(src = [],celebName, celebMatch){
        if(src.length === 0){
            return `
                <div class="no-match">사람이 맞으신가요? </div>
            `;
        }
        else
            return `
            <ul class="celeb-list">
                ${src.map(this._getItem).join("")}
                ${this._getText(celebName,celebMatch)}
            </ul>
           
        `;
    }

    _getText(celebName,celebMatch){
        return `
        <div class="celeb-list-desc-wrap">  
            <h1 class="celeb-list-desc"> ${celebName}님과 </h1>
            <br/>
            <h2 class="celeb-list-desc"> ${celebMatch}% 일치합니다! </h2>
        </div>
        `
    }

    _getItem(src) {
        return `
            <li data-keyword="${src}">
                <img src='${src}'/>
            </li>
        `;
    }
}