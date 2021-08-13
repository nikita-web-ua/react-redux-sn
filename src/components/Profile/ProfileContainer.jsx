import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfileData} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom"

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = 2
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId ).then((response) => {
            this.props.setProfileData(response.data)
            debugger
        })
    }

    render(){
        return <Profile {...this.props} profileData={this.props.profileData}/>

    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileData
    }
}

let withRouterContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setProfileData})(withRouterContainerComponent)