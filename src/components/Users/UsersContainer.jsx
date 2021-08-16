import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setTotal,
    setCurrentPage,
    showPreloader,
    toggleFollowingInProgress
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.showPreloader(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.showPreloader(false)
            this.props.setUsers(data.items)
            this.props.setTotal(data.totalCount)
        })
    }

    changePage = (p) => {

        this.props.setCurrentPage(p)
        this.props.showPreloader(true)
        usersAPI.getUsers(p, this.props.pageSize).then(data => {
            this.props.showPreloader(false)
            this.props.setUsers(data.items)
            this.props.setTotal(data.totalCount)
        })

    }

    render() {

        return <>
            {this.props.isFetching === true ? <Preloader /> : null}
            <Users changePage={this.changePage} totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} users={this.props.users} unfollow={this.props.unfollow}
                   follow={this.props.follow} followingInProgress={this.props.followingInProgress} toggleFollowingInProgress={this.props.toggleFollowingInProgress}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setTotal, setCurrentPage, showPreloader, toggleFollowingInProgress})(UsersComponent)