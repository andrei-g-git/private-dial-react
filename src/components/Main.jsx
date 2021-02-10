import React from 'react';
import RightSidebar from './RightSidebar.jsx';
import GroupDialog from './GroupDialog.jsx';
import BookmarkDialog from './BookmarkDialog.jsx';
import Contextmenu from './Contextmenu.jsx';
import GroupContainer from './GroupContainer.jsx'
import AllGroupsModel from '../js/AllGroupsModel.js';
import BookmarkGroupModel from '../js/BookmarkGroupModel.js';
import '../css/Main.css'
import BookmarkModel from '../js/BookmarkModel.js';
import SaverAndLoader from '../js/SaverAndLoader.js';

export const AddGroupButtonContext = React.createContext();
export const AddBookmarkContext = React.createContext();

class Main extends React.Component{
    
    constructor(props){ //I needed to pass the props even though I don't have any
        super(props);

        this.state = { 
            showGroupDialog: false,
            showBookmarkDialog: false,
            groupIndexOfRequestingBookmark: 0,
            showBookmarkContext: false, 
            bookmarkContextX: "0px",
            bookmarkContextY: "0px",  
            rightClickedBookmark: 0,
            saverAndLoader: new SaverAndLoader(),
            allGroups: new AllGroupsModel()//this.newModelOrLoad()  //careful here        
        };
    }

    render(){

        return(
            <div
                id="main"
            >
                <AddBookmarkContext.Provider
                    value={this.openBookmarkDialog}
                >
                    <GroupContainer
                        groups={this.state.allGroups.getGroups()}
                        handleNoteContextWithIndexAndCoordinates={this.openBookmarkContext}
                    >
                    </GroupContainer>
                </AddBookmarkContext.Provider>

                <AddGroupButtonContext.Provider
                    value={this.openGroupDialog}
                >
                    <RightSidebar></RightSidebar>
                </AddGroupButtonContext.Provider>

                <GroupDialog
                    show={this.state.showGroupDialog}
                    handleNameAndColor={this.processNewGroupProperties}
                    handleClose={this.closeDialog}
                    idAffix="new"
                    previousName=""
                    previousColor=""
                >
                </GroupDialog> {/* new */}

                <GroupDialog

                >
                </GroupDialog> {/* edit */}

                <BookmarkDialog
                    show={this.state.showBookmarkDialog}
                    handleUrl={this.processNewBookmarkAtIndex}
                    handleClose={this.closeDialog}
                    idAffix="new"
                    previousUrl=""   
                    groupIndex={this.state.groupIndexOfRequestingBookmark}                             
                >
                </BookmarkDialog> {/* new */}

                <Contextmenu
                    showContext={this.state.showBookmarkContext}
                    idAffix="bookmark"
                    handleClose={this.closeContext} //this has to be redundant...
                    menuItems={[
                        {
                            name:"Edit",
                            callback: null//this.openEditNoteModal
                        },
                        {
                            name:"Placeholder",
                            callback: null
                        },
                        {
                            name:"Delete",
                            callback: this.deleteBookmark
                        }
                    ]}
                    positionX={this.state.bookmarkContextX}
                    positionY={this.state.bookmarkContextY}
                >
                </Contextmenu>
            </div>
        );
    }

    openGroupDialog = () =>{
        this.setState({
            showGroupDialog: true
        })
    }

    openBookmarkDialog = (index) => {
        this.setState({
            groupIndexOfRequestingBookmark: index,
            showBookmarkDialog: true
        });
    }

    processNewGroupProperties = (name, color) =>{
        if(name.length || color.length){
            var newGroup = new BookmarkGroupModel(this.state.allGroups.getLength());
            newGroup.setName(name);
            newGroup.setColor(color);
            this.state.allGroups.pushGroup(newGroup); //reset the forms in the modal

            this.state.allGroups.setNew(false);

            this.setState({
                allGroups: this.state.allGroups
            })
            this.closeDialog();
        }
    }

    processNewBookmarkAtIndex = (url, index) =>{
        if(url.length){
            var newBookmark = new BookmarkModel(url);
            this.state.allGroups.pushBookmarkAtGroupIndex(newBookmark, index);
            this.setState({
                allGroups: this.state.allGroups
            });
            this.closeDialog();
        }
    }

    closeDialog = () => {
        this.setState({
            showGroupDialog: false,
            showBookmarkDialog: false
        });

        this.savePrettyMuchEverything();
    }

    deleteBookmark = () =>{
        this.setState({
            showBookmarkContext: false
        });

        this.savePrettyMuchEverything();
    }

    closeContext = () => {

    }

    openBookmarkContext = (index, x, y) =>{
        this.setState({
            showBookmarkContext: true,
            bookmarkContextX: x.toString() + "px",
            bookmarkContextY: y.toString() + "px",
            rightClickedBookmark: index //should probably be in model too
        });
    }

    savePrettyMuchEverything = () =>{
        this.state.saverAndLoader.saveObject('allGroups', this.state.allGroups);
    }

    loadPrettyMuchEverything = () => {
        var allGroupsPlaceholder = new AllGroupsModel();
        var loadedGroupsData = this.state.saverAndLoader.loadObject('allGroups');
        for(var i = 0; i < loadedGroupsData.groups.length; i++){
            var loadedGroup = loadedGroupsData.groups[i];
            var groupPlaceholder = new BookmarkGroupModel(i);
            groupPlaceholder.setName(loadedGroup.name);
            groupPlaceholder.setColor(loadedGroup.color);
            groupPlaceholder.setDefault(loadedGroup.default);

            for(var j = 0; j < loadedGroup.bookmarks.length; j++){
                var loadedBookmark = loadedGroup.bookmarks[j];
                var url = loadedBookmark.url;
                var bookmarkPlaceholder = new BookmarkModel(url);
                groupPlaceholder.pushBookmark(bookmarkPlaceholder);
            }

            allGroupsPlaceholder.pushGroup(groupPlaceholder);  
        }
        return allGroupsPlaceholder;
    }   
    
    newModelOrLoad = () => {
        var loaded = this.loadPrettyMuchEverything();
        if(loaded.groups.length && loaded.checkIfNew()){
            return loaded;
        } else {
            return new AllGroupsModel();
        }
    }   
    
    componentDidMount(){
        this.setState({
            allGroups: this.newModelOrLoad()
        })
    }
}

export default Main;