import React from "react";
import {Form, Formik} from "formik";
import {FilterType} from "../../redux/users-reducer";
import {Field} from "formik";

type PropsType = {
    onFilterChanged: (filter: FilterType) => void,
}

const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

    return (
        <Formik
            initialValues={{term: '', friend: "null"}}
            validate={() => {
            }}
            onSubmit={(values, {setSubmitting}) => {

                const filter: FilterType = {
                    term: values.term,
                    friend: values.friend === 'true' ? true : values.friend === 'false' ? false : null
                }

                props.onFilterChanged(filter)
                setSubmitting(false)
                debugger
            }}
        >
            {({
                  isSubmitting
              }) => (
                <Form>
                    <Field type={'text'} name={'term'}/>
                    <Field name={'friend'} as={'select'}>
                        <option value={'null'}>All</option>
                        <option value={'true'}>Only followed</option>
                        <option value={'false'}>Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Filter
                    </button>
                </Form>
            )}
        </Formik>
    )
})

export default UsersSearchForm