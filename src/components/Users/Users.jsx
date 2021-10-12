import React from 'react'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage} changePage={props.changePage}
                       pageSize={props.pageSize} totalUsersCount={props.totalCount}/>
            <div>
                {
                    props.users.map((u) => <User user={u}
                                                 followingInProgress={props.followingInProgress}
                                                 follow={props.follow}
                                                 unfollow={props.unfollow}/>)
                }
            </div>
        </div>
    );
}
export default Users