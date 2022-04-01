import {Comment, Tooltip, Avatar} from 'antd';
import {createElement, useEffect, useState} from "react";
import {LikeOutlined, LikeFilled} from '@ant-design/icons';
import moment from 'moment';

type PropsType = {
    id: number
    message: string
    likesCounter: number
    updateLikesCounter: (id: number, operator: number) => void
}

const Post: React.FC<PropsType> = (props) => {

    const [likes, setLikes] = useState(props.likesCounter);
    const [action, setAction] = useState('null');

    useEffect(() => {
        setLikes(props.likesCounter)
    }, [props.likesCounter])

    const like = () => {
        if (action === 'liked') {
            props.updateLikesCounter(props.id, -1)
            setAction('null');
        } else {
            props.updateLikesCounter(props.id, 1)
            setAction('liked');
        }
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
      </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <Comment
            actions={actions}
            author={<a>Han Solo</a>}
            avatar={<Avatar src={`https://joeschmoe.io/api/v1/${props.id}`} alt="Han Solo"/>}
            content={
                <p>
                    {props.message}
                </p>
            }
            datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }
        />
    );
}

export default Post;