import React from "react";
import {Form, Formik} from "formik";
import {FilterType} from "../../redux/users-reducer";
import {getFilter} from "../../redux/users-selectors";
import {useSelector} from "react-redux";
import styles from './users.module.css'
import {Input, Select, SubmitButton} from "formik-antd";

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
                <Form className={styles.searchForm}>
                    <Input className={styles.searchFormInput} name={'term'} type={'text'} placeholder={'user-name'}/>
                    <Select name={'friend'}  className={styles.searchFormSelect}>
                        <option value={'null'}>All</option>
                        <option value={'true'}>Only followed</option>
                        <option value={'false'}>Only unfollowed</option>
                    </Select>
                    <SubmitButton disabled={isSubmitting}>
                        Filter
                    </SubmitButton>
                </Form>
            )}
        </Formik>
    )
})

export default UsersSearchForm