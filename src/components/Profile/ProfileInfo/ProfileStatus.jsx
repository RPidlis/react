import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditeMode = () =>{
        this.setState ({
            editMode: true
        })
    }
    deactivateEditeMode = () =>{
        this.setState ({
            editMode: false
        })
        this.props.updateStatus(this.state.status)

    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditeMode }>
                            {this.props.status}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <span>
                            <input
                                onChange={this.onStatusChange}
                                autoFocus={true}
                                onBlur={this.deactivateEditeMode}
                                value={this.state.status}
                            />
                        </span>
                    </div>
                }
            </>
        );
    }
};

export default ProfileStatus;
