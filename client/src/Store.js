import axios from "axios";

export default class Store {
    constructor() {
        this.myPic = "";
        this.isFace = false;
        this.similarCeleb = ""
    }

    async findCeleb() {
        if(!this.myPic) return;

        const data = new FormData();
        data.append('file', this.myPicFile);

        const test = await axios.post("http://localhost:8000/uploadImage",data);

        this.isFace = test.data.info.faceCount > 0 ? true : false;
        this.similarCeleb = this.isFace ? test.data.faces[0].celebrity.value : "";
        this.similarConfidence = this.isFace ? test.data.faces[0].celebrity.confidence : "";

        const test2 = await axios.get("http://localhost:8000/find-image", {
            params : {
                keyword: encodeURIComponent(this.similarCeleb)
            }
        })
        this.similarImgList = test2.data.items.map( item => item.thumbnail);


        console.log(test2);
    }

    reset() {
        this.myPic = "";
        this.isFace = false;
        this.similarCeleb = "";
        this.similarImgList=[];
    }
}