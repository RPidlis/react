import {connect} from 'react-redux';
import {follow, getUsers, unfollow} from '../../redux/users-reducer';
import Users from './Users';
import React from 'react';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    follow = (userId) => {
        this.props.follow(userId);
    };

    unfollow = (userId) => {
        this.props.unfollow(userId);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.unfollow}
                   follow={this.follow}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
            />;
        </>
    };
};


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};


export default connect(mapStateToProps,
    {follow, getUsers, unfollow})(UsersContainer);

