import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import {AddPostFormValuesType, PostReduxForm} from "./AddPostForm/AddPostForm";
import {PostType} from "../../../types/types";

export type MapPropsType = {
    posts: Array<PostType>
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCounter={post.likesCounter}/>)

    let onSubmitNewPost = (formData: AddPostFormValuesType) => {
        props.addPost(formData.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <PostReduxForm onSubmit={onSubmitNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const MyPostMemorized = React.memo(MyPosts)

export default MyPostMemorized;