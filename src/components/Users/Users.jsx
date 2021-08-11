import React from 'react'
import styles from './users.module.css'
import avatarka from '../../assets/images/avatarka.jpg'

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
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : avatarka} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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