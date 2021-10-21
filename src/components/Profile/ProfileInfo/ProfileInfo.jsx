import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader"
import avatarka from '../../../assets/images/avatarka.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profileData, status, updateProfileStatus, isOwner, uploadPhoto}) => {

    if (!profileData){
        return (<Preloader />)
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            uploadPhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.profileData}>
                    <img src={profileData.photos.large  || avatarka}  alt="user avatar" className={s.mainPhoto}/> <br/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}></input>}
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