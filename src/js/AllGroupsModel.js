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



    getLength(){
        return this.groups.length;
    }
}

export default AllGroupsModel;