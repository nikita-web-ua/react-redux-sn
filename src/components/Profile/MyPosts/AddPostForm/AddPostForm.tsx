import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import React from "react";

const maxLength10 = maxLengthCreator(10)

type PropsType = {

}

export type AddPostFormValuesType = {
    newPostText: string
}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} placeholder={'What do you think?'}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

export const PostReduxForm = reduxForm<AddPostFormValuesType, PropsType>({ form: 'profile-add-post'})(AddPostForm)