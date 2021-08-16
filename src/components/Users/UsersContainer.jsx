import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setTotal,
    setCurrentPage,
    showPreloader
} from "../../redux/users-reducer";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.showPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.showPreloader(false)
            this.props.setUsers(response.data.items)
            this.props.setTotal(response.data.totalCount)
        })
    }

    changePage = (p) => {

        this.props.setCurrentPage(p)
        this.props.showPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.showPreloader(false)
            this.props.setUsers(response.data.items)
            this.props.setTotal(response.data.totalCount)
        })

    }

    render() {

        return <>
            {this.props.isFetching === true ? <Preloader /> : null}
            <Users changePage={this.changePage} totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} users={this.props.users} unfollow={this.props.unfollow}
                   follow={this.props.follow}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setTotal, setCurrentPage, showPreloader})(UsersComponent)