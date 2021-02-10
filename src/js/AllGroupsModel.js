class AllGroupsModel{
    constructor(){
        this.groups = [];
        this.isNew = true;
    }

    pushGroup(group){
        this.groups.push(group);
    }
    getGroups(){
        return this.groups;
    }

    pushBookmarkAtGroupIndex(bookmark, index){
        this.groups[index].pushBookmark(bookmark);
    }

    getLength(){
        return this.groups.length;
    }

    checkIfNew(){
        return this.isNew;
    }
    setNew(isNew){this.isNew = isNew;}
}

export default AllGroupsModel;