import {Input} from "../../../shared/ui/Input";
import {memo, useCallback, useState} from "react";
import styles from './GreetingsForm.module.scss';
import {validateEmail} from "../model/services/validateEmail/validateEmail.ts";
import {validateFullName} from "../model/services/validateFullName/validateFullName.ts";

export const GreetingsForm = memo(() => {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [errorFullName, setErrorFullName] = useState<boolean>(false);

    const onChangeFullName = useCallback((value: string) => {
        if (errorFullName) {
            setErrorFullName(prevState => !prevState);
        }

        setFullName(value);
    }, [setFullName, errorFullName]);

    const onChangeFullEmail = useCallback((value: string) => {
        if (errorEmail) {
            setErrorEmail(prevState => !prevState);
        }

        setEmail(value);
    }, [setEmail, errorEmail]);

    const onSubmit = () => {
        const validateEmailErrors = validateEmail(email);
        const validateFullNameErrors = validateFullName(fullName);

        if (validateEmailErrors.length) {
            setErrorEmail(true);
        }

        if (validateFullNameErrors.length) {
            setErrorFullName(true);
        }

        console.log(fullName, email)
    }
    
    return (
        <div className={styles.GreetingsForm}>
            <div className={styles.GreetingsForm__fields}>
                <Input
                    value={fullName}
                    onChange={onChangeFullName}
                    label={'ФИО'}
                    errorText={'Обязательное поле'}
                    hasError={errorFullName}
                />
                <Input
                    value={email}
                    onChange={onChangeFullEmail}
                    label={'Электропочта'}
                    errorText={'Обязательное поле'}
                    hasError={errorEmail}
                />
            </div>
            <div>
                <button onClick={onSubmit}>Поехали</button>
            </div>
        </div>
    )
})