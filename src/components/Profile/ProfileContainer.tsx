import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileData,
    getProfileStatus,
    saveProfile,
    updateProfileStatus,
    uploadPhoto,
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom"
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileDataType} from "../../types/types";

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getProfileData: (userId: number) => void,
    getProfileStatus: (userId: number) => void,
    updateProfileStatus: (status: string) => void,
    uploadPhoto: (file: File) => void,
    saveProfile: (profile: ProfileDataType) => Promise<any>
}

type PathParamsType = {
    userId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileData(userId as number)
        this.props.getProfileStatus(userId as number)
    }

    componentDidMount() {
        this.refreshProfile()

    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
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

const mapStateToProps = (state: AppStateType) => {
    return {
        profileData: state.profilePage.profileData,
        status: state.profilePage.profileStatus,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileData, getProfileStatus, updateProfileStatus, uploadPhoto, saveProfile}),
    withRouter
)(ProfileContainer)