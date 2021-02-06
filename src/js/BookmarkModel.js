class BookmarkModel {
    constructor(url){
        this.url = url;
    }

    getUrl(){return this.url;}
    setUrl(url){this.url = url}
}

export default BookmarkModel;