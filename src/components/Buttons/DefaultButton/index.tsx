import React from 'react'
import DefaultButtonContainer from './DefaultButton.styles';

interface IProps {
    text: string;
    isDisabled?: boolean;
    onClick: () => void;
    className?: string;
}

const DefaultButton: React.FC<IProps> = ({
    text,
    isDisabled = false,
    onClick,
    className = ''
}) => {
    return (
        <DefaultButtonContainer
            className={`${className}`}
            disabled={isDisabled}
            onClick={onClick}
        >
            {text}
        </DefaultButtonContainer>
    )
}

export default DefaultButton