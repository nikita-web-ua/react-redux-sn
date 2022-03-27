import {maxLengthCreator} from "../../../../utils/validators/validators";
import {Form, Input /* ... */} from 'formik-antd'
import { Formik } from 'formik'
import React from "react";
import {Button, Col, Row} from "antd";

const maxLength10 = maxLengthCreator(10)

type PropsType = { addPost: (newPostText: string) => void; }

export type AddPostFormValuesType = {
    newPostText: string
}

export const AddPostForm: React.FC<PropsType> = (props) => {
    return (
        <div className={'addPostContainer'}>
            <Row>
                <Col xs={24} sm={20} md={16} lg={10} xl={10}>
                    <Formik
                        initialValues={{newPostText: ''}}
                        onSubmit={(formData, {resetForm}) => {
                            props.addPost(formData.newPostText)
                            resetForm()
                        }}
                        render={() => (
                            <Form>
                                <Form.Item name='newPostText'>
                                    <Input.TextArea name='newPostText' placeholder="What's new?" showCount
                                                    required={true} maxLength={100}/>
                                </Form.Item>
                                <Form.Item name={'button'}>
                                    <Button htmlType={'submit'}>Add Post</Button>
                                </Form.Item>
                            </Form>
                        )}
                    />
                </Col>
            </Row>
        </div>
    )
}