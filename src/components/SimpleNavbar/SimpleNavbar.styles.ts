import styled from "styled-components";

const SimpleNavbarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--main-bg);
    width: 100vw;
    height: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--main-color);

    .simple-navbar-btn {
        line-height: 1em;
        margin: 0 1.5em;
        color: inherit;
        text-decoration: none;

        &:hover {
            cursor: pointer;
            font-weight: bold;
        }
    }

    .simple-navbar-is-active {
        font-weight: bold;
    }

`

export default SimpleNavbarContainer;
