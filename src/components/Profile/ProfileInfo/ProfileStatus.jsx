import React from 'react'
import s from './ProfileInfo.module.css'


class ProfileStatus extends React.Component {

    state = {
        editStatus: false,
        status : this.props.status
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
        this.props.updateProfileStatus(this.state.status)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChange = (e) => {
        this.setState({ status: e.currentTarget.value })
    }

    render() {
        return (
            <div>
                {'LS = '+ this.state.status}
                {
                    this.state.editStatus
                    ? <div> <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.disableEditStatus} value={this.state.status}/></div>
                    : <div> <p onClick={this.activateEditStatus}>{this.props.status}</p></div>
                }
            </div>
        )
    }
}

export default ProfileStatus