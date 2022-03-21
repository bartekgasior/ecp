import styled from "styled-components";

const InputWithMovingPlaceholderContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    color: var(--main-color);
    
    .input-floating-placeholder {
        position: absolute;
        left: 2em;
        top: 0;
        opacity: 0.75;
        pointer-events: none;
        transition: 0.2s linear all;
    }

    input {
        overflow-y: visible;
        font-size: 1em;
        padding: 0.25em 0;
        margin: 0 2em;
        outline: none;
        border: none;
        border-bottom: 1px solid var(--main-color);
        background: transparent;
        color: var(--main-color);

        &:focus ~ .input-floating-placeholder,
        &:not(:focus):valid ~ .input-floating-placeholder {
            top: -1em;
            left: 2.5em;
            font-size: 0.75em;
        }
    }

    .input-with-moving-placeholder-error {
        color: var(--error);
        font-size: 0.75em;
        margin: 0 2rem;
        font-weight: bold;
    }
 
`

export default InputWithMovingPlaceholderContainer;