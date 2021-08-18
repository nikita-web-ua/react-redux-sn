import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileData, setProfileData} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom"
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfileData(userId)
        // usersAPI.getProfileData(userId).then((response) => {
        //     this.props.setProfileData(response.data)
        // })
    }

// getProfileData(userId)
    render() {
        return <Profile {...this.props} profileData={this.props.profileData}/>

    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileData
    }
}

let withRouterContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{getProfileData, setProfileData})(withRouterContainerComponent)