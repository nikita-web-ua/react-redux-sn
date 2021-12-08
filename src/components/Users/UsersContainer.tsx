import React, {Props} from 'react'
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {getIsFetching} from "../../redux/users-selectors";
import {useSelector} from "react-redux";

type PropsType = {

}

export const UsersContainer: React.FC<PropsType> = (props) => {

    const isFetching = useSelector(getIsFetching)

    return <>
        {isFetching === true ? <Preloader/> : null}
        <Users/>
    </>

}

export const UsersPage = compose<React.ComponentType>(
    withAuthRedirect,
)(UsersContainer)