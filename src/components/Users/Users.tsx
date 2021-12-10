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
import {useHistory} from "react-router-dom";
import * as queryString from "querystring";

type PropsType = {}
type QueryParamsType = {page: string, term?: string, friend?: string}

let Users: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch()
    const history = useHistory()

    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getFilter)
    const totalCount = useSelector(getTotalUsersCount)
    const users = useSelector(getUsersSuperSelector)

    useEffect( () => {
        const parsed = queryString.parse(history.location.search.substring(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...filter, term: parsed.term as string}

        switch (parsed.friend){
            case 'null': {
                actualFilter = {...actualFilter, friend: null}
                break
            }
            case 'true': {
                actualFilter = {...actualFilter, friend: true}
                break
            }
            case 'false': {
                actualFilter = {...actualFilter, friend: false}
                break
            }
        }

        dispatch(getUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect (()=>{
        let query:QueryParamsType = {page: '1'}

        query.page = String(currentPage)
        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

    const changePage = (p: number) => {
        dispatch(getUsers(p, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
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