import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader"
import avatarka from '../../../assets/images/avatarka.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ChangeEvent, useState} from "react";
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileDataType} from "../../../types/types";

type PropsType = {
    profileData: ProfileDataType | null,
    status: string,
    updateProfileStatus: (status: string) => void,
    isOwner: boolean,
    uploadPhoto: (file: File) => void,
    saveProfile: (profileData: ProfileDataType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({profileData, status, updateProfileStatus, isOwner, uploadPhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profileData) {
        return (<Preloader/>)
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        if (e.target.files?.length) {
            uploadPhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileDataType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.profileData}>
                    <img src={profileData.photos.large || avatarka} alt="user avatar" className={s.mainPhoto}/> <br/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                    <h3>{profileData.fullName}</h3>
                    <ProfileStatusWithHooks status={status} updateProfileStatus={updateProfileStatus}/>
                    {
                        editMode
                            ?
                            <ProfileDataForm onSubmit={onSubmit} initialValues={profileData} profileData={profileData}/>
                            : <ProfileData profileData={profileData}
                                           isOwner={isOwner}
                                           setEditMode={() => {
                                               setEditMode(true)
                                           }}/>
                    }
                </div>
            </div>
        </div>
    )
        ;
}

type ProfileDataPropsType = {
    profileData: ProfileDataType,
    isOwner: boolean,
    setEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profileData, isOwner, setEditMode}) => {
    return (
        <div>
            { isOwner &&
            <div>
                <button onClick={setEditMode}>Edit Mode</button>
            </div>
            }
            <div>
                <b>About Me:</b> {profileData.aboutMe}
            </div>
            <div>
                <b>Looking for a job:</b> { profileData.lookingForAJob ? "yes" : "no"}
            </div>
            {/*{ profileData.lookingForAJob &&*/}
            <div>
                <b>Professional skills:</b> {profileData.lookingForAJobDescription}
            </div>
            {/*}*/}
            <div>
                <b>Contacts:</b> {
                Object
                    .keys(profileData.contacts)
                    .map((key) => {
                        return <SocialNetContact key={key} socialNetName={key}
                                                 socialNetValue={profileData.contacts[key as keyof ContactsType]}/>
                    })}
            </div>
        </div>
    )
}

type SNContactPropsType = {
    socialNetName: string,
    socialNetValue: string
}

const SocialNetContact: React.FC<SNContactPropsType> = ({socialNetName, socialNetValue}) => {
    return (
        <div className={s.socialNetContact}>
            <b>{socialNetName}: </b> {socialNetValue}
        </div>
    );
}

export default ProfileInfo;