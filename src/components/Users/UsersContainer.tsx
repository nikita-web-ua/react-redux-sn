import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    getUsers,
    actions
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuperSelector
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    users: Array<UserType>,
    totalCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersComponent extends React.Component<PropsType> {

    constructor(props: PropsType) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    changePage = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching === true ? <Preloader/> : null}
            <Users changePage={this.changePage} totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} users={this.props.users} unfollow={this.props.unfollow}
                   follow={this.props.follow} followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: getUsersSuperSelector(state),
        totalCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage: actions.setCurrentPage, getUsers}),
    withAuthRedirect,
)(UsersComponent)