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

export const AddGroupButtonContext = React.createContext();
export const AddBookmarkContext = React.createContext();

class Main extends React.Component{
    
    constructor(props){ //I needed to pass the props even though I don't have any
        super(props);

        this.state = {
            allGroups: new AllGroupsModel(),
            showGroupDialog: false,
            showBookmarkDialog: false,
            groupIndexOfRequestingBookmark: 0
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
                    handleUrl={this.processNewBookmark}
                    handleClose={this.closeDialog}
                    idAffix="new"
                    previousUrl=""   
                    groupIndex={this.state.groupIndexOfRequestingBookmark}                             
                >
                </BookmarkDialog> {/* new */}

                <Contextmenu></Contextmenu>
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
        })
    }
}

export default Main;