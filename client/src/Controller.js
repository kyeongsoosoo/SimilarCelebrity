export default class Controller{
    constructor(
        store,
        {
            buttonView,
            myPicView,
            celebView,
            spinnerView,
        }
    ){
        this.store = store;

        this.buttonView = buttonView;
        this.myPicView = myPicView;
        this.celebView = celebView;
        this.spinnerView = spinnerView;

        this.subscribeViewEventes();
        this.render();
    }

    subscribeViewEventes() {
        this.buttonView.on("@mypic", (event) => {
            
            const myPicURL = URL.createObjectURL(event.detail.file);
            this.store.myPic = myPicURL;
            this.store.myPicFile = event.detail.file;
            this.render('myPic');
        }).on("@find", async (event) => {
            this.store.isLoading = true;
            this.render();
            await this.store.findCeleb();
            this.store.isLoading = false;
            this.render('find');
        }).on("@reset", () => {
            this.store.reset();
            this.render();
        })
    }

    changeTab(tab){
        this.store.selectedTab = tab;
        this.render();
    }

    render(view) {
        this.myPicView.hide();
        this.celebView.hide();
        this.buttonView.show(this.store.selectedTab);
        this.spinnerView.hide();

        if(this.store.isLoading){
            this.celebView.hide();
            this.myPicView.hide();
            this.spinnerView.show();
        }

        if(view === 'myPic'){
            this.celebView.hide();
            this.myPicView.show(this.store.myPic)
        }
        else if(view === 'find'){
            this.myPicView.hide();
            this.celebView.show(this.store.similarImgList, this.store.similarCeleb, this.store.similarConfidence);
        }
    }
}