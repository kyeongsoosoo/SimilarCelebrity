import { qs } from "../helpers";
import View from "./View";

export default class SpinnerView extends View {
    constructor(){
        super(qs(".spinner-view"));

        this.template = new Template();
    }

    show() {
        this.element.innerHTML = this.template.getSpinner();
        super.show();
    }
}

class Template {
    getSpinner() {
        return `
            <div class = "spinner-wrapper">
                <div class = "ripple-spinner">
                    <div/>
                </div>
            </div>
        `
    }
}

