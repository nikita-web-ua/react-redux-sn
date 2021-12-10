import React from "react";
import {Form, Formik} from "formik";
import {FilterType} from "../../redux/users-reducer";
import {Field} from "formik";
import {getFilter} from "../../redux/users-selectors";
import {useSelector} from "react-redux";

type PropsType = {
    onFilterChanged: (filter: FilterType) => void,
}

const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

    const filter = useSelector(getFilter)

    return (
        <Formik
            enableReinitialize
            initialValues={{term: filter.term, friend: String(filter.friend)}}
            validate={() => {
            }}
            onSubmit={(values, {setSubmitting}) => {

                const filter: FilterType = {
                    term: values.term,
                    friend: values.friend === 'true' ? true : values.friend === 'false' ? false : null
                }

                props.onFilterChanged(filter)

                setSubmitting(false)
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