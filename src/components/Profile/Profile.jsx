import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profileData={props.profileData} status={props.status} updateProfileStatus={props.updateProfileStatus}/>
            <MyPostsContainer />
        </div>
    )
        ;
}

export default Profile;