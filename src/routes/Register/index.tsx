import React, { useMemo, useState } from 'react'
import RegisterContainer from './Register.styles';
import SimpleNavbar from 'components/SimpleNavbar';
import InputWithMovingPlaceholder from 'components/InputWithMovingPlaceholder';
import DefaultButton from 'components/Buttons/DefaultButton';

interface NewUser {
    login: string;
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
    const { login, password, rePassword } = user;
    if (login.length < 5) errors.push({ field: 'login', value: 'Login is to short - at least 5 characters' });
    if (password.length < 8) errors.push({ field: 'password', value: 'Password is to short - at least 8 characters' });
    if (!password.match(/.*\d/)) errors.push({ field: 'password', value: 'Password requires at least one digit' });
    if (!password.match(/.*[a-z]/)) errors.push({ field: 'password', value: 'Password requires at least one lower case' });
    if (!password.match(/.*[A-Z]/)) errors.push({ field: 'password', value: 'Password requires at least one upper case' });
    if (rePassword !== password) errors.push({ field: 'rePassword', value: 'Passwords do not match' });

    return errors;
}

const Register: React.FC<{}> = () => {
    const [newUser, setNewUser] = useState<NewUser>({ login: '', password: '', rePassword: '' });

    const errors = useMemo(() => {
        if ([newUser.login, newUser.password].every(v => v.length === 0)) return [];
        return handleErrors(newUser);
    }, [newUser])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setNewUser(prevNewUser => ({
            ...prevNewUser,
            [name]: value
        }));
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
                    nameValue='login'
                    placeholder={'Username'}
                    value={newUser.login}
                    handleInputChange={e => handleInputChange(e)}
                    required={true}
                    errors={errors.filter(({ field }) => field === 'login').map(({ value }) => value)}
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
                    isDisabled={errors.length > 0 || (newUser.login.length === 0 && newUser.password.length === 0)}
                    onClick={() => console.log('TO DO')}
                />
            </div>
        </RegisterContainer>
    )
}

export default Register