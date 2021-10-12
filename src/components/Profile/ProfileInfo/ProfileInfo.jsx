import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profileData, status, updateProfileStatus}) => {

    if (!profileData){
        return (<Preloader />)
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.profileData}>
                    <img src={profileData.photos.small} alt="user avatar"/>
                    <h3>{profileData.fullName}</h3>
                    <ProfileStatusWithHooks  status={status} updateProfileStatus={updateProfileStatus}/>
                    <p><i>About Me</i>: {profileData.aboutMe}</p>
                </div>
            </div>
        </div>
    )
        ;
}

export default ProfileInfo;