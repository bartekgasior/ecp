import React from 'react'
import spinner from 'assets/spinners/spinner.gif';
import DefaultButtonContainer from './DefaultSpinner.styles';

interface IProps {
    className?: string;
    style?: object;
    width?: number;
    height?: number;
}

const DefaultSpinner: React.FC<IProps> = ({ className = '', style = {}, width = 25, height = 25 }) => {
    return (
        <DefaultButtonContainer
            src={spinner}
            alt={''}
            className={className}
            style={style}
            width={width}
            height={height}
        />
    )
}

export default DefaultSpinner