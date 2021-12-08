import React, {useEffect} from 'react'
import Paginator from "../common/Paginator/Paginator";
import {User} from "./User";
import {actions, FilterType, getUsers} from "../../redux/users-reducer";
import UsersSearchForm from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getPageSize,
    getFilter,
    getTotalUsersCount,
    getUsersSuperSelector,
} from "../../redux/users-selectors";

type PropsType = {}

let Users: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch()
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getFilter)
    const totalCount = useSelector(getTotalUsersCount)
    let users = useSelector(getUsersSuperSelector)
    const changePage = (p: number) => {
        dispatch(getUsers(p, pageSize, filter))
    }

    useEffect( () => {
        dispatch(getUsers(currentPage, pageSize, filter))
    }, [])

    const onFilterChanged = (filter: FilterType) => {
        dispatch(actions.setFilter(filter))
        dispatch(getUsers(1, pageSize, filter))
    }

    return (
        <div>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator currentPage={currentPage} changePage={changePage}
                       pageSize={pageSize} totalItemsCount={totalCount}/>
            <div>
                {
                    users.map((u) => <User user={u}/>)
                }
            </div>
        </div>
    );
}

export default Users