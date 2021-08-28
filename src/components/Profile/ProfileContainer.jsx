import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileData, getProfileStatus, updateProfileStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom"
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
        }
        this.props.getProfileData(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        return <Profile {...this.props} profileData={this.props.profileData} updateProfileStatus={this.props.updateProfileStatus}/>

    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileData,
        status: state.profilePage.profileStatus,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {getProfileData, getProfileStatus, updateProfileStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)