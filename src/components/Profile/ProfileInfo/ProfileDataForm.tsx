import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css"
import style from "./../../common/FormsControls/FormsControls.module.css"
import {ProfileDataType} from "../../../types/types";

type PropsType = {
    profileData: ProfileDataType
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataType, PropsType> & PropsType> = ({handleSubmit, profileData, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save Changes</button>
            </div>
            {
                error &&  <div className={style.formSummaryError}> {error}</div>
            }
            <div>
                <b>Full name:</b>  <Field placeholder={'Name Surname'} name={'fullName'} component={Input}/>
            </div>
            <div>
                <b>About me:</b><Field placeholder={'About Me...'} name={'aboutMe'} component={Input}/>
            </div>
            <div>
                <b>Looking for a job:</b> <Field name={'lookingForAJob'} component={'input'} type={'checkbox'}/>
            </div>
            <div>
                <b>Professional skills:</b>  <Field placeholder={'Professional skills'} name={'lookingForAJobDescription'} component={Textarea}/>
            </div>
            <div>
                <b>Contacts:</b> { Object.keys(profileData.contacts).map((key) => {
                return (
                    <div key={key} className={s.socialNetContact} >
                        <b>{key} :</b> <Field placeholder={key + ' link'} name={'contacts.'+key} component={Input}/>
                    </div>)
            })  }
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileDataType, PropsType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm