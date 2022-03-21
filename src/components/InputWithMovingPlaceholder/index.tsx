import React from 'react'
import InputWithMovingPlaceholderContainer from './InputWithMovingPlaceholder.styles';

interface IProps {
    value: string;
    type: string;
    nameValue?: string;
    placeholder?: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errors?: string[];
    containerClassName?: string;
    inputClassName?: string;
    placeholderClassName?: string;
    errorClassName?: string;
    required?: boolean;
}

const InputWithMovingPlaceholder: React.FC<IProps> = ({
    value,
    type,
    nameValue,
    placeholder = null,
    handleInputChange,
    errors = null,
    containerClassName = '',
    inputClassName = '',
    placeholderClassName = '',
    errorClassName = '',
    required = false
}) => {
    return (
        <InputWithMovingPlaceholderContainer
            className={`${containerClassName}`}
        >
            <input
                type={type}
                name={nameValue}
                value={value}
                onChange={e => handleInputChange(e)}
                autoComplete='off'
                required={required}
                className={inputClassName}
            />
            {placeholder && <span className={`input-floating-placeholder ${placeholderClassName}`}>
                {placeholder}
            </span>}

            {errors && errors && <>
                {errors.map((error, index) => <span
                    key={index}
                    className={`input-with-moving-placeholder-error ${errorClassName}`}
                >
                    {error}
                </span>
                )}
            </>}
        </InputWithMovingPlaceholderContainer >
    )
}

export default InputWithMovingPlaceholder