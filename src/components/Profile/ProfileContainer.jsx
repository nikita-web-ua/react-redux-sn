import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileData,
    getProfileStatus,
    saveProfile,
    updateProfileStatus,
    uploadPhoto
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom"
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileData(userId)
        this.props.getProfileStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profileData={this.props.profileData}
                updateProfileStatus={this.props.updateProfileStatus}
                uploadPhoto={this.props.uploadPhoto}
                saveProfile={this.props.saveProfile}/>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileData,
        status: state.profilePage.profileStatus,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps, {getProfileData, getProfileStatus, updateProfileStatus, uploadPhoto, saveProfile}),
    withRouter
)(ProfileContainer)