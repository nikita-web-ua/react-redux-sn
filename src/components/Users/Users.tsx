import React from 'react'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type propsType = {
    currentPage: number,
    changePage: (page: number) => void,
    pageSize: number,
    totalCount: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

let Users: React.FC<propsType> = ({currentPage, changePage, pageSize, totalCount, users, followingInProgress, follow, unfollow}) => {

    return (
        <div>
            <Paginator currentPage={currentPage} changePage={changePage}
                       pageSize={pageSize} totalItemsCount={totalCount}/>
            <div>
                {
                    users.map((u) => <User user={u}
                                                 followingInProgress={followingInProgress}
                                                 follow={follow}
                                                 unfollow={unfollow}/>)
                }
            </div>
        </div>
    );
}
export default Users