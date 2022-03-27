import s from './MyPosts.module.css'
import Post from './Post/Post';
import React, {useState} from 'react';
import {AddPostForm} from "./AddPostForm/AddPostForm";
import {PostType} from "../../../types/types";

export type MapPropsType = {
    posts: Array<PostType>,
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    let postsElements = props.posts.map(post => <Post key={post.id} id={post.id} message={post.message} likesCounter={post.likesCounter}/>)

    return (
        <div className={s.postsBlock}>
            <AddPostForm addPost={props.addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const MyPostMemorized = React.memo(MyPosts)

export default MyPostMemorized;