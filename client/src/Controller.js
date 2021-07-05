export default class Controller{
    constructor(
        store,
        {
            buttonView,
            myPicView,
            celebView,
        }
    ){
        this.store = store;

        this.buttonView = buttonView;
        this.myPicView = myPicView;
        this.celebView = celebView;

        this.subscribeViewEventes();
        this.render();
    }

    subscribeViewEventes() {
        this.buttonView.on("@mypic", (event) => {
            
            const myPicURL = URL.createObjectURL(event.detail.file);
            this.store.myPic = myPicURL;
            this.store.myPicFile = event.detail.file;
            this.render();
        }).on("@find", async (event) => {
            await this.store.findCeleb();
            this.render();
        }).on("@reset", () => {
            this.store.reset();
            this.render();
        })
        .on("@change", (event) => this.changeTab(event.detail.value));
    }

    changeTab(tab){
        this.store.selectedTab = tab;
        this.render();
    }

    render() {
        this.myPicView.hide();
        this.celebView.hide();
        this.buttonView.show(this.store.selectedTab);

        if(this.store.myPic){
            this.myPicView.show(this.store.myPic)
        }
        if(this.store.hasResult){
            this.myPicView.hide();
            this.celebView.show(this.store.similarImgList, this.store.similarCeleb, this.store.similarConfidence);
        }
    }
}