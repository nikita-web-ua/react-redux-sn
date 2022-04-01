import React from 'react'
import styles from './users.module.css'
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {getFollowingInProgress} from "../../redux/users-selectors";
import {follow, unfollow} from "../../redux/users-reducer";
import {Avatar, Button, Typography} from "antd";
import {UserOutlined, UserAddOutlined, UserDeleteOutlined} from "@ant-design/icons";

const { Text } = Typography;
// const btnPos = {
//     marginTop: '-66px',
//     marginLeft: '115px'
// }
const gap = {marginTop: '5px'}

type UserPropsType = {
    user: UserType,
}

export const User: React.FC<UserPropsType> = ({user}) => {

    const dispatch = useDispatch()
    const followingInProgress = useSelector(getFollowingInProgress)

    return (
        <div className={styles.user}>
                    <span>
                        <NavLink to={'./profile/' + user.id}>
                            <div>
                                 <Avatar shape="square" size={150} src={user.photos.small } icon={<UserOutlined />} />
                            </div>
                        </NavLink>
                        <div className={styles.bntPos}>
                            {user.followed
                                ?
                                <Button type="primary" danger shape="circle" icon={<UserDeleteOutlined />} size={'large'} title={'unfollow'}
                                        disabled={followingInProgress.some((id) => id === user.id)} onClick={() => {
                                    dispatch(unfollow(user.id))
                                }}/>
                                :
                                <Button type="primary" shape="circle" icon={<UserAddOutlined />} size={'large'} title={'follow'}
                                        disabled={followingInProgress.some((id) => id === user.id)} onClick={() => {
                                    dispatch(follow(user.id))
                                }}/>}
                        </div>
                         <NavLink to={'./profile/' + user.id}>
                              <div style={gap}><Text strong>{user.name}</Text></div>
                         </NavLink>
                    </span>
            <span>
                {/*<span>*/}
                {/*            <div>{"user.location.country"}</div>*/}
                {/*            <div>{"u.location.city"}</div>*/}
                {/*</span>*/}
            </span>

        </div>);
};