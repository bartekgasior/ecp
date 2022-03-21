import styled from "styled-components";

const DefaultButtonContainer = styled.button`
    font-weight: bold;
    background-color: transparent;
    border: 1px solid var(--main-color);
    color: var(--main-color);
    border-radius: 4px;
    width: 6em;
    margin: 0 auto;
    padding: 0.5em 0;

    &:hover {
        cursor: pointer;
        background-color: var(--main-color);
        color: var(--secondary-color);
        border: 1px solid var(--secondary-color);
        box-shadow: rgba(255, 255, 255, 0.75) 0 0 1.5em;
    }

    &:disabled {
        pointer-events: none;
        opacity: 0.5;
    }
`

export default DefaultButtonContainer;