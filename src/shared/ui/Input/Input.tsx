import classnames from 'classnames';
import {ChangeEvent, InputHTMLAttributes, memo} from "react";
import styles from "./Input.module.scss";
import {Mods} from "../../types/common.ts";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'type'>
interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
    type?: string;
    readonly?: boolean;
    label?: string;
    hasError?: boolean;
    errorText?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder, type = 'text',
        readonly = false,
        label,
        hasError,
        errorText,
        ...other
    } = props;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    }

    const mods: Mods = {
        [styles.error]: hasError,
    }

    return (
        <div className={styles.wrapper}>
            {label && (
                <span>{label}</span>
            )}
            <input
                type={type}
                readOnly={readonly}
                value={value}
                className={classnames(styles.Input, mods, [className])}
                placeholder={placeholder}
                onChange={onChangeHandler}
                {...other}
            />
            {hasError && errorText && (
                <span className={styles.errorText}>{errorText}</span>
            )}
        </div>
    );
});
