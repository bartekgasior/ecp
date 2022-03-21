import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;

    #login-form {
        display: flex;
        flex-direction: column;
        margin: 3em 0;
        padding: 2em 0;
        background: var(--main-bg);
        border: 1px solid var(--main-color);
        color: var(--main-color);
        border-radius: 4px;
        box-shadow: rgba(255, 255, 255, 0.35) 0px 0px 1em;

        > label {
            padding-left: 1.75rem;
            margin-bottom: 1rem;
            border-left: 4px solid var(--main-color);
            font-size: 1.5em;
            margin-left: -1px;
            font-weight: bold;
        }

        .login-input-container {
            margin-bottom: 1em;
        }
    }
`

export default LoginContainer;