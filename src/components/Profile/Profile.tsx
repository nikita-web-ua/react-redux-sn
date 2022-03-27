import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileDataType} from "../../types/types";
import {Divider} from "antd";
import styles from './Profile.module.css'

type PropsType = {
    profileData: ProfileDataType | null,
    status: string,
    updateProfileStatus: (status: string) => void,
    isOwner: boolean,
    uploadPhoto: (file: File) => void,
    saveProfile: (profileData: ProfileDataType) => Promise<any>
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo isOwner={props.isOwner} profileData={props.profileData}
                         status={props.status} uploadPhoto={props.uploadPhoto}
                         updateProfileStatus={props.updateProfileStatus} saveProfile={props.saveProfile}/>
            <Divider orientation={'left'}>My Posts</Divider>
            <MyPostsContainer/>
        </div>
    )
        ;
}

export default Profile;