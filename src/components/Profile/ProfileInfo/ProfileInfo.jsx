import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profileData){
        return (<Preloader />)
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.profileData}>
                    <img src={props.profileData.photos.small} alt="user avatar"/>
                    <h3>{props.profileData.fullName}</h3>
                    <ProfileStatusWithHooks  status={props.status} updateProfileStatus={props.updateProfileStatus}/>
                    <p><i>About Me</i>: {props.profileData.aboutMe}</p>
                </div>
            </div>
        </div>
    )
        ;
}

export default ProfileInfo;