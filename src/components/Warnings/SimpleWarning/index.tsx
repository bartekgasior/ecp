import React from 'react'
import SimpleWarningContainer from './SimpleWarning.styles';

interface IProps {
    msg: string
}

const SimpleWarning: React.FC<IProps> = ({ msg }) => {
    if (!msg) return null;
    return (
        <SimpleWarningContainer>
            {msg}
        </SimpleWarningContainer>
    )
}

export default SimpleWarning