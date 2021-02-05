import React from 'react';
import '../css/GroupDialog.css';

class GroupDialog extends React.Component{
    constructor(){
        super();

        this.state = {
            show: false
        }
    }

    render(){
        return(
        <div>
            {
            this.state.show

            ?             
                <div 
                    id={this.props.idAffix + "-group-dialog-container"}
                    className="group-dialog-container"
                >
                    <div
                        id="delete-this-ASP-just here to separate the close button"
                    >
                        <form
                            id={this.props.idAffix + "-group-dialog"}
                            className="group-dialog-form"
                            onSubmit={this.handleSubmit}
                        >
                            <label
                                className="group-name-label"
                            >
                                Type in the folder name
                            </label>

                            <input 
                                type="text"
                                id={this.props.idAffix + "-group-name-field"} /* these are going to repeat in the dom, should be dynamic */
                                className="group-name-field"                    
                            >
                            </input>

                            <label
                                className="group-color-label"
                            >
                                Type in the folder color or hex
                            </label>

                            <input 
                                type="text"
                                id={this.props.idAffix + "-group-color-field"}
                                className="group-color-field"
                            >
                            </input>

                            <button //should be img
                                type="submit"
                                id={this.props.idAffix + "-save-group-button"}
                                className="save-group-button"
                            >
                                Save
                            </button>

{/*                             <button
                                type="text"
                                id={this.props.idAffix + "-cancel-group-button"}
                                className="cancel-group-save"
                                onClick={this.handleClose}
                            >
                                Cancel
                            </button> */}
                        </form>


                        <button
                                type="text"
                                id={this.props.idAffix + "-cancel-group-button"}
                                className="cancel-group-save"
                                onClick={this.props.handleClose}
                            >
                                Cancel
                            </button>



                    </div>
                    
                </div>            
            :
        
                <div>{/* show nothing */}</div>

            }
        </div>                
        )
    }

    static getDerivedStateFromProps(props, state){
//        if(state.show === false){ //well it's going to be false here onClose
            return {show: props.show}
//        } else {
//            return null;
 //       }
    }

    componentDidMount(){
//        document.getElementById(this.props.idAffix + "-group-name-field").value = this.props.previousName;
//        document.getElementById(this.props.idAffix + "-group-color-field").value = this.props.previousColor;        
    }

/*     handleClose = () => { //in parent
        this.setState({
            show: false
        });
    } */
  
    handleSubmit  = (event)  => {   // no idea if this works, try the nested return thing if it doesn't 
        event.preventDefault();
//I could use event.target.value here
        var nameField = event.currentTarget[0]; //"tough"//document.getElementById(this.props.idAffix + "-group-name-field");
        var colorField = event.currentTarget[1];//"shit"//document.getElementById(this.props.idAffix + "-group-color-field");
        //band aid, delete; submit event fires even if the button clicked isn't a submit type
        //if(this.state.show){ //this doesn't change in time ... maybe it's asynchronous or something
            this.props.handleNameAndColor(nameField.value, colorField.value);
        //}
        nameField.value = ""; 
        colorField.value = "";
    }
}

export default GroupDialog;