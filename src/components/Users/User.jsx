import React from 'react'
import styles from './users.module.css'
import avatarka from '../../assets/images/avatarka.jpg'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unfollow}) => {

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
                                    unfollow(user.id)
                                }}>Unfollow</button>
                                :
                                <button disabled={followingInProgress.some((id) => id === user.id)} onClick={() => {
                                    follow(user.id)
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
export default User