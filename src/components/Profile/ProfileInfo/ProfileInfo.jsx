import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profileData){
        return (<Preloader />)
    }

    return (
        <div>
            <div>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.profileData}>
                    <img src={props.profileData.photos.small} alt="user avatar"/>
                    <h3>{props.profileData.fullName}</h3>
                    <p><i>About Me</i>: {props.profileData.aboutMe}</p>
                </div>
            </div>
        </div>
    )
        ;
}

export default ProfileInfo;