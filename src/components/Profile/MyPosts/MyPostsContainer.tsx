import React from 'react';
import {actions} from "../../../redux/profile-reducer";
import MyPostMemorized, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) =>{
    return {
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps,
    {addPost: actions.addPost, updateLikesCounter: actions.updateLikesCounter})(MyPostMemorized)

export default MyPostsContainer;