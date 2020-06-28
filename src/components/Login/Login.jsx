import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import styles from './../common/FormsControls/FormsControls.module.css'



 const Login = (props) => {
     const onSubmit = (formData) => {
         props.login(formData.email, formData.password, formData.rememberMe)
     }

     if(props.isAuth){
         return <Redirect to={`/profile/${props.userId}`} />
     }
    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
 }

 const maxlength18 = maxLengthCreator(18)

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'email'}
                    name={'email'}
                    component={Input}
                    validate={[required, maxlength18]}
                />
            </div>
            <div>
                <Field
                    placeholder={'password'}
                    name={'password'}
                    type={'password'}
                    component={Input}
                    validate={[required, maxlength18]}
                />
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm);

 const mapStateToProps = (state) => ({
     isAuth: state.auth.isAuth,
     userId: state.auth.userId
 })

export default connect (mapStateToProps, {login}) (Login);