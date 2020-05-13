import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingtAC,
    unfollowAC
} from '../../redux/users-reducer';
import Users from './Users';
import React from 'react';
import * as axios from 'axios';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetchingtAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetchingtAC(false);

            });
    };

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetchingtAC(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetchingtAC(false);
            });
    };

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        users={this.props.users}
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
        isFetching: state.usersPage.isFetching
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toggleIsFetchingtAC: (isFetching) => {
            dispatch(toggleIsFetchingtAC(isFetching));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

