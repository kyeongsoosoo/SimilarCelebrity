import { qs } from "../helpers";
import View from "./View";

export default class InputView extends View {
    constructor(){
        super(qs("#file-main"));

        this.bindEvents();
    }
}