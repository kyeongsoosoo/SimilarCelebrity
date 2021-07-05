import axios from "axios";

export default class Store {
    constructor() {
        this.myPic = "";
        this.isFace = false;
        this.similarCeleb = ""
        this.similarImgList = [];
        this.hasResult = false;
        this.isLoading = false;
    }

    async findCeleb() {
        if(!this.myPic) return;

        const data = new FormData();
        data.append('file', this.myPicFile);



        const celebData = await axios.post("https://kucc-celeb.herokuapp.com/uploadImage",data);

        this.isFace = celebData.data.info ? true : false;
        this.similarCeleb = this.isFace ? celebData.data.faces[0].celebrity.value : "";
        this.similarConfidence = this.isFace ? parseInt((celebData.data.faces[0].celebrity.confidence)*100) : "";
        this.hasResult=true;

        if(this.isFace){
            const celebImgData = await axios.get("https://kucc-celeb.herokuapp.com/find-image", {
                params : {
                    keyword: encodeURIComponent(this.similarCeleb)
                }
            })
            this.similarImgList = celebImgData.data.items.map( item => item.thumbnail);
        }

    }

    reset() {
        this.myPic = "";
        this.isFace = false;
        this.similarCeleb = "";
        this.similarImgList=[];
        this.hasResult=false;
        this.isLoading = false;
    }
}