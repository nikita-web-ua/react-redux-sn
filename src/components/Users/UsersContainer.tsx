import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    getUsers,
    actions, FilterType
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getTerm,
    getTotalUsersCount,
    getUsersSuperSelector
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    users: Array<UserType>,
    totalCount: number,
    pageSize: number,
    filter: FilterType,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    setFilter: (filter: FilterType) => void,
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
}

type PropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersComponent extends React.Component<PropsType> {

    constructor(props: PropsType) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter)
    }

    changePage = (p: number) => {
        // this.props.setCurrentPage(p)
        this.props.getUsers(p, this.props.pageSize, this.props.filter)
    }

    onFilterChanged = (filter: FilterType) => {
        this.props.setFilter(filter)
        this.props.getUsers(1, this.props.pageSize, filter)
    }

    render() {

        return <>
            {this.props.isFetching === true ? <Preloader/> : null}
            <Users changePage={this.changePage} totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} users={this.props.users} unfollow={this.props.unfollow}
                   follow={this.props.follow} followingInProgress={this.props.followingInProgress}
                   onFilterChanged={this.onFilterChanged}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: getUsersSuperSelector(state),
        totalCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        filter: getTerm(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage: actions.setCurrentPage, setFilter: actions.setFilter, getUsers}),
    withAuthRedirect,
)(UsersComponent)