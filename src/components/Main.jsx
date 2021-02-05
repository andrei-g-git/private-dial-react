import React from 'react';
import RightSidebar from './RightSidebar.jsx';
import GroupDialog from './GroupDialog.jsx';
import BookmarkDialog from './BookmarkDialog.jsx';
import Contextmenu from './Contextmenu.jsx';
import GroupContainer from './GroupContainer.jsx'
import AllGroupsModel from '../js/AllGroupsModel.js';
import BookmarkGroupModel from '../js/BookmarkGroupModel.js';
import '../css/Main.css'

export const AddGroupButtonContext = React.createContext();

class Main extends React.Component{
    
    constructor(props){ //I needed to pass the props even though I don't have any
        super(props);

        this.state = {
            allGroups: new AllGroupsModel(),
            showGroupDialog: false
        };
    }

    render(){

        return(
            <div
                id="main"
            >
                <GroupContainer
                    groups={this.state.allGroups.getGroups()}
                >
                </GroupContainer>

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

                <GroupDialog></GroupDialog> {/* edit */}

                <BookmarkDialog></BookmarkDialog>

                <Contextmenu></Contextmenu>
            </div>
        );
    }

    openGroupDialog = () =>{
        this.setState({
            showGroupDialog: true
        })
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

    closeDialog = () => {
        this.setState({
            showGroupDialog: false
        })
    }
}

export default Main;