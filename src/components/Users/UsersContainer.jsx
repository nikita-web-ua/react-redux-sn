import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";


class UsersComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    changePage = (p) => {
        this.props.setCurrentPage(p)
        this.props.getUsers(p, this.props.pageSize)

    }

    render() {

        return <>
            {this.props.isFetching === true ? <Preloader /> : null}
            <Users changePage={this.changePage} totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} users={this.props.users} unfollow={this.props.unfollow}
                   follow={this.props.follow} followingInProgress={this.props.followingInProgress}/>
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

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})(UsersComponent)