export default class SaverAndLoader{
    constructor(){
        this.valueTypeMap = new Map();

    }

    saveValue(key, value){
        var valueType = typeof(value);
        switch(valueType){
            case 'function':
            case 'undefined':
            case 'object':
                alert("Must save simple value like a string, number or boolean; Make sure you're not saving objects, undefined values etc...");
                break;
            default:
                this.valueTypeMap[key] = valueType;
                localStorage.setItem(key, value);
                break;
        }
         
    }

    loadValue(key){
        var valueString = localStorage.getItem(key);
        var actualValue = valueString; //default
        switch(this.valueTypeMap[key]){
            case 'number':
                actualValue = Number(valueString);
                break;
            case 'boolean':
                actualValue = Boolean(valueString);
                break;

        }
        return actualValue;
    }

    saveObject(key, object){ //this only saves the data structure, omits the functions and other complexities because json can't easily process that...
        var jsonData = JSON.stringify(object);
        localStorage.setItem(key, jsonData);
    }

    loadObject(key){
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key));
        } else {
            alert('Load data is invalid or corrupted!');
        }
    }
}