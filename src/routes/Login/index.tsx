import React, { useState } from 'react'
import SimpleNavbar from 'components/SimpleNavbar';
import LoginContainer from './Login.styles';
import InputWithMovingPlaceholder from 'components/InputWithMovingPlaceholder';
import DefaultButton from 'components/Buttons/DefaultButton';

interface Credentials {
    login: string;
    password: string;
}

const Login: React.FC<{}> = () => {
    const [credentials, setCredentials] = useState<Credentials>({ login: '', password: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setCredentials(prevCredentials => ({
            ...prevCredentials,
            [name]: value
        }));
    }

    const handleLoginClick = () => {
        console.log('TO DO')
    }

    return (
        <LoginContainer>
            <SimpleNavbar isLogin={true} />
            <div id='login-form'>
                <label>
                    Login
                </label>
                <InputWithMovingPlaceholder
                    type='text'
                    nameValue='login'
                    placeholder={'Username'}
                    value={credentials.login}
                    handleInputChange={e => handleInputChange(e)}
                    required={true}
                    containerClassName='login-input-container'
                />

                <InputWithMovingPlaceholder
                    type='password'
                    nameValue='password'
                    placeholder={'Password'}
                    value={credentials.password}
                    handleInputChange={e => handleInputChange(e)}
                    required={true}
                    containerClassName='login-input-container'
                />

                <DefaultButton
                    text={'Login'}
                    isDisabled={credentials.login.length === 0 && credentials.password.length === 0}
                    onClick={() => handleLoginClick()}
                />
            </div>
        </LoginContainer>
    )
}

export default Login;