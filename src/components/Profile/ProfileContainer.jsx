import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileData} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom"
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfileData(userId)
    }

    render() {
        return <Profile {...this.props} profileData={this.props.profileData}/>

    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileData
    }
}

export default compose(
    connect(mapStateToProps, {getProfileData}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)