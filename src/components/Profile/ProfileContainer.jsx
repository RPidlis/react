import React from "react";
import s from "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        // let userId = 8;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7856;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props} status={this.props.status} profile={this.props.profile}
                         updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, updateStatus, getStatus}),
    withRouter
)(ProfileContainer);
