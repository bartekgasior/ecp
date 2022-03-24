import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import RegisterContainer from './Register.styles';
import SimpleNavbar from 'components/Navbars/SimpleNavbar';
import InputWithMovingPlaceholder from 'components/Inputs/InputWithMovingPlaceholder';
import DefaultButton from 'components/Buttons/DefaultButton';
import UsersAPI from 'api/UsersAPI';
import SimpleWarning from 'components/Warnings/SimpleWarning';
import { RegisterResponse } from 'api/UsersAPI/register';

interface NewUser {
    email: string;
    password: string;
    rePassword: string;
}

interface NewUserErrors {
    field: string;
    value: string;
}

type handleErrorsType = (user: NewUser) => Array<NewUserErrors>;

const handleErrors: handleErrorsType = user => {
    const errors: NewUserErrors[] = [];
    const { email, password, rePassword } = user;
    if (email.length < 5) errors.push({ field: 'email', value: 'email is to short - at least 5 characters' });
    if (password.length < 8) errors.push({ field: 'password', value: 'Password is to short - at least 8 characters' });
    if (!password.match(/.*\d/)) errors.push({ field: 'password', value: 'Password requires at least one digit' });
    if (!password.match(/.*[a-z]/)) errors.push({ field: 'password', value: 'Password requires at least one lower case' });
    if (!password.match(/.*[A-Z]/)) errors.push({ field: 'password', value: 'Password requires at least one upper case' });
    if (rePassword !== password) errors.push({ field: 'rePassword', value: 'Passwords do not match' });

    return errors;
}

const Register: React.FC<{}> = () => {
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState<NewUser>({ email: '', password: '', rePassword: '' });
    const [msg, setMsg] = useState<string>('');
    const [isFetching, setIsFetching] = useState<boolean>(false);

    const errors = useMemo(() => {
        if ([newUser.email, newUser.password].every(v => v.length === 0)) return [];
        return handleErrors(newUser);
    }, [newUser])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setNewUser(prevNewUser => ({
            ...prevNewUser,
            [name]: value
        }));
    }

    const handleRegisterClick = async (): Promise<void> => {
        setIsFetching(true);

        try {
            const [isValid, data]: RegisterResponse = await UsersAPI.register(newUser.email, newUser.password);
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
        <RegisterContainer>
            <SimpleNavbar isLogin={false} />
            <div id='register-form'>
                <label>
                    Register
                </label>

                <InputWithMovingPlaceholder
                    type='text'
                    nameValue='email'
                    placeholder={'E-Mail'}
                    value={newUser.email}
                    handleInputChange={e => handleInputChange(e)}
                    required={true}
                    errors={errors.filter(({ field }) => field === 'email').map(({ value }) => value)}
                    containerClassName='register-input-container'
                />

                <InputWithMovingPlaceholder
                    type='password'
                    nameValue='password'
                    placeholder={'Password'}
                    value={newUser.password}
                    handleInputChange={e => handleInputChange(e)}
                    required={true}
                    errors={errors.filter(({ field }) => field === 'password').map(({ value }) => value)}
                    containerClassName='register-input-container'
                />

                <InputWithMovingPlaceholder
                    type='password'
                    nameValue='rePassword'
                    placeholder={'Confirm password'}
                    value={newUser.rePassword}
                    handleInputChange={e => handleInputChange(e)}
                    required={true}
                    errors={errors.filter(({ field }) => field === 'rePassword').map(({ value }) => value)}
                    containerClassName='register-input-container'
                />

                <DefaultButton
                    text={'Register'}
                    isDisabled={errors.length > 0 || (newUser.email.length === 0 && newUser.password.length === 0)}
                    onClick={() => handleRegisterClick()}
                    isFetching={isFetching}
                    spinnerHeight={15}
                    spinnerWidth={15}
                />

                <SimpleWarning msg={msg} />

            </div>
        </RegisterContainer>
    )
}

export default Register