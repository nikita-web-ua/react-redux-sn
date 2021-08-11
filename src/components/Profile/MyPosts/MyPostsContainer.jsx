import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
//
// const MyPostsContainers = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//
//                 let onPostChange = (text) => {
//                     store.dispatch(updateNewPostTextActionCreator(text))
//
//                 }
//                 return <MyPosts addPost={addPost} onPostChange={onPostChange} posts={store.getState().profilePage.posts}
//                                 newPostText={store.getState().profilePage.newPostText}/>
//             }
//         }
//         </StoreContext.Consumer>
//     );
// }

const mapStateToProps = (state) =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;