import React from 'react'
import styles from './Paginator.module.css'

let Paginator = ({totalUsersCount, pageSize, currentPage, changePage}) => {

    let numberOfPages = Math.ceil(totalUsersCount / pageSize)
    let pages = []

    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i)
    }

    return (
            <div className={styles.pagination}>
                {
                    pages.map((p) => {
                        return (
                            <span className={currentPage === p && styles.active}
                                  onClick={() => changePage(p)}>{p}</span>
                        )
                    })}
            </div>
    )
}
export default Paginator