import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileData, getProfileStatus, updateProfileStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom"
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 19049
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
        status: state.profilePage.profileStatus
    }
}

export default compose(
    connect(mapStateToProps, {getProfileData, getProfileStatus, updateProfileStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)