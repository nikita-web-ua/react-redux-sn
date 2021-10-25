import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profileData={props.profileData}
                         status={props.status} uploadPhoto={props.uploadPhoto}
                         updateProfileStatus={props.updateProfileStatus} saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </div>
    )
        ;
}

export default Profile;