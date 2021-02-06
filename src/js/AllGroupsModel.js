class AllGroupsModel{
    constructor(){
        this.groups = [];
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
}

export default AllGroupsModel;