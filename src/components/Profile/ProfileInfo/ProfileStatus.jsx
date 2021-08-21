import React from 'react'
import s from './ProfileInfo.module.css'


class ProfileStatus extends React.Component {
    state = {
        editStatus: false
    }

    activateEditStatus = () => {
        this.setState({
            editStatus: true
        })
    }

    disableEditStatus = () => {
        this.setState({
            editStatus: false
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.editStatus
                    ? <div><input autoFocus={true} onBlur={this.disableEditStatus} value={this.props.status}/></div>
                    : <div><p onClick={this.activateEditStatus}>{this.props.status}</p></div>
                }


            </div>
        )
    }
}

export default ProfileStatus