class FaviconSrcGenerator{
    constructor(){
        this.googleIcongrabberPrefix = "https://s2.googleusercontent.com/s2/favicons?domain=";
    }

    generateFromUrl(link){
        let host = this.extractHostName(link);
        let faviconSrc = this.googleIcongrabberPrefix + host; //should I use concat function instead?
        return faviconSrc;
    }

    extractHostName(link){
        let urlThing = new URL(link);
        return urlThing.hostname; 
    }
}

export default FaviconSrcGenerator;