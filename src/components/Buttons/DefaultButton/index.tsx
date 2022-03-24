import DefaultSpinner from 'components/Spinners/DefaultSpinner';
import React from 'react'
import DefaultButtonContainer from './DefaultButton.styles';

interface IProps {
    text: string;
    isDisabled?: boolean;
    onClick: () => void;
    className?: string;
    isFetching?: boolean;
    spinnerWidth?: number;
    spinnerHeight?: number;
}

const DefaultButton: React.FC<IProps> = ({
    text,
    isDisabled = false,
    onClick,
    className = '',
    isFetching = false,
    spinnerWidth,
    spinnerHeight
}) => {
    return (
        <DefaultButtonContainer
            className={`${className}`}
            disabled={isDisabled}
            onClick={onClick}
        >
            {isFetching
                ? <DefaultSpinner height={spinnerHeight} width={spinnerWidth} />
                : text
            }
        </DefaultButtonContainer>
    )
}

export default DefaultButton