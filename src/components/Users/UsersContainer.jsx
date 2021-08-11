import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, setTotalAC, setCurrentPageAC} from "../../redux/users-reducer";
import * as axios from "axios";

class UsersComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotal(response.data.totalCount)
        })
    }

    changePage = (p) => {

        this.props.setCurrentPage(p)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotal(response.data.totalCount)
        })

    }

    render() {
        return <Users changePage={this.changePage} totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage} users={this.props.users} unfollow={this.props.unfollow}
                      follow={this.props.follow}/>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotal: (totalCount) => {
            dispatch(setTotalAC(totalCount))
        },
        setCurrentPage: (p) => {
            dispatch(setCurrentPageAC(p))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent)