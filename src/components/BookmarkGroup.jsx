import React from 'react';

class BookmarkGroup extends React.Component{
    constructor(){
        super();

        this.state = {
            groupModel: null
        }
    }

    render(){
        return(
            <div

            >
                {this.state.groupModel.getName()}
            </div>
        );
    }

    static getDerivedStateFromProps(props){
        return {groupModel: props.groupModel}
    }
}

export default BookmarkGroup;