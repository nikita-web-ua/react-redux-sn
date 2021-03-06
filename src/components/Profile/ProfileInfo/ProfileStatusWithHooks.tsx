import React, {ChangeEvent, useEffect, useState} from 'react'
import s from './ProfileInfo.module.css'

type PropsType = {
    status: string,
    updateProfileStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
            <div>
                <p onClick={activateEditMode}>{props.status || "-----"}</p>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks