import {useId} from "react";
import styles from './form.module.css'
import {useForm} from "react-hook-form";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type FormPropsType = {
    title: string
    submitForm: (email: string, password: string) => void
}

const Form = ({title, submitForm}: FormPropsType) => {

    const id = useId()

    const {register, handleSubmit, formState: {isSubmitted, errors}} = useForm<FormDataType>()

    const onSubmit = (data: FormDataType) => {
        submitForm(data.email, data.password)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form__control}>
                <label htmlFor={`${id}-email`}>Электронная почта</label>
                <input id={`${id}-email`}
                       aria-describedby={`${id}-email-error-message`}
                       type="email" autoComplete="email"
                       {...register('email',
                           {required: 'The field is required'})} />

                {errors.email && <p id={`${id}-email-error-message`}
                                    aria-live="assertive">{errors.email.message}</p>}
            </div>

            <div className={styles.form__control}>
                <label htmlFor={`${id}-password`}>Пароль</label>
                <input id={`${id}-password`}
                       aria-describedby={`${id}-password-error-message`}
                       type="password" autoComplete="current-password"
                       {...register('password',
                           {
                               required: 'The field is required',
                               minLength: {value: 8, message: 'min length is 8'}
                           })}/>

                {errors.password && <p id={`${id}-password-error-message`}
                                       aria-live="assertive">{errors.password.message}</p>}
            </div>

            <div className={styles.form__control}>
                <label htmlFor={`${id}-rememberMe`}>Запомнить меня</label>
                <input id={`${id}-rememberMe`} type="checkbox" {...register('rememberMe')}/>
            </div>

            <button className={styles.form__submitButton} disabled={isSubmitted} type="submit">{title}</button>
        </form>
    )
}

export default Form
