import { delegate, emit, on, qs, qsAll } from "../helpers"
import View from "./View";

export const ButtonType = {
    MYPIC : "MYPIC",
    FIND : "FIND",
    RETRY: "RETRY"
}

const ButtonLabel = {
    [ButtonType.MYPIC] : "사진을 선택하세요",
    [ButtonType.FIND]: "실행할까요??",
    [ButtonType.RETRY]: "초기화합니다",
}

export default class ButtonView extends View {
    constructor() {
        super(qs(".pic-controll"));

        this.input = qs("#file-main");

        on(this.input, "change", (event) => this.handleInpClick(event));

        this.template = new Template();
        this.bindEvents();
    }

    bindEvents() {
        delegate(this.element, "click", "li", (event) => this.handleClick(event));
      }

    show(selectedButton) {
        this.element.innerHTML = this.template.getButtonList();
        qsAll("li", this.elment).forEach((li) => {
            li.className = li.dataset.tab === selectedButton ? "active" : "";
        })
    }

    handleClick(event) {
    
        const value = event.target.dataset.tab;
        console.log('twice?')
        if(value === "MYPIC"){
            this.input.click();
        }
        else if(value === "FIND"){
            this.emit("@find");
        }
        else if(value === "RETRY"){
            this.emit("@reset");
        }

        this.emit("@change", { value });
      }

    handleInpClick(event) {
        const file = event.target.files[0];
        emit(this.element,"@mypic", { file });
    }
}

class Template {
    getButtonList() {
      return `
        <ul class="tabs">
          ${Object.values(ButtonType)
            .map((buttonType) => ({ buttonType, buttonLabel: ButtonLabel[buttonType] }))
            .map(this._getTab)
            .join("")}
        </ul>
      `;
    }
  
    _getTab({ buttonType, buttonLabel }) {
      return `
        <li data-tab="${buttonType}">${buttonLabel}</li>
       `;
    }
  }
