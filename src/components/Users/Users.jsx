import React from 'react'
import styles from './users.module.css'
import avatarka from '../../assets/images/avatarka.jpg'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


let Users = (props) => {

    let numberOfPages = Math.ceil(props.totalCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={styles.pagination}>
                {
                    pages.map((p) => {
                        return (
                            <span className={props.currentPage === p && styles.active}
                                  onClick={() => props.changePage(p)}>{p}</span>
                        )
                    })}
            </div>
            {props.users.map((u) => <div key={u.id}>
                    <span>
                        <NavLink to={'./profile/' + u.id}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : avatarka} className={styles.userPhoto}/>
                            </div>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    usersAPI.unfollow(u.id).then((data) => {
                                            if(data.resultCode === 0){
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    usersAPI.follow(u.id).then((data) => {
                                            if (data.resultCode === 0){
                                                props.follow(u.id)
                                            }
                                    })
                                }}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
            </div>)}

        </div>
    )
}
export default Users