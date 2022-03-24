import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import SimpleNavbar from 'components/Navbars/SimpleNavbar';
import LoginContainer from './Login.styles';
import InputWithMovingPlaceholder from 'components/Inputs/InputWithMovingPlaceholder';
import DefaultButton from 'components/Buttons/DefaultButton';
import UsersAPI from 'api/UsersAPI';
import { SignInResponse } from 'api/UsersAPI/signIn';
import SimpleWarning from 'components/Warnings/SimpleWarning';

interface Credentials {
    email: string;
    password: string;
}

const Login: React.FC<{}> = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState<Credentials>({ email: '', password: '' });
    const [msg, setMsg] = useState<string>('');
    const [isFetching, setIsFetching] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setCredentials(prevCredentials => ({
            ...prevCredentials,
            [name]: value
        }));
    }

    const handleLoginClick = async (): Promise<void> => {
        setIsFetching(true);
        try {
            const [isValid, data]: SignInResponse = await UsersAPI.signIn(credentials.email, credentials.password);
            if (isValid) {
                localStorage.setItem('ecp-jwt', data);
                setIsFetching(false);
                setMsg('');
                navigate('/dashboard')
                return;
            }

            setMsg(data);
            setIsFetching(false);
        } catch (e: any) {
            setIsFetching(false);
            throw new Error('login error');
        }
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
                    nameValue='email'
                    placeholder={'E-Mail'}
                    value={credentials.email}
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
                    isDisabled={credentials.email.length === 0 && credentials.password.length === 0}
                    onClick={() => handleLoginClick()}
                    isFetching={isFetching}
                    spinnerWidth={15}
                    spinnerHeight={15}
                />

                <SimpleWarning msg={msg} />
            </div>
        </LoginContainer>
    )
}

export default Login;