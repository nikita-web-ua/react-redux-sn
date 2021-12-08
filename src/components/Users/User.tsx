import React from 'react'
import styles from './users.module.css'
import avatarka from '../../assets/images/avatarka.jpg'
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {getFollowingInProgress} from "../../redux/users-selectors";
import {follow, unfollow} from "../../redux/users-reducer";

type UserPropsType = {
    user: UserType,
}

export const User: React.FC<UserPropsType> = ({user}) => {

    const dispatch = useDispatch()
    const followingInProgress = useSelector(getFollowingInProgress)

    return (
        <div>
                    <span>
                        <NavLink to={'./profile/' + user.id}>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : avatarka}
                                     className={styles.userPhoto}/>
                            </div>
                        </NavLink>
                        <div>
                            {user.followed
                                ?
                                <button disabled={followingInProgress.some((id) => id === user.id)} onClick={() => {
                                    dispatch(unfollow(user.id))
                                }}>Unfollow</button>
                                :
                                <button disabled={followingInProgress.some((id) => id === user.id)} onClick={() => {
                                    dispatch(follow(user.id))
                                }}>Follow</button>}
                        </div>
                    </span>
            <span>
                <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                </span>
                <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                </span>
            </span>

        </div>);
};