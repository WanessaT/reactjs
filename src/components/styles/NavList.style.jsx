
import styled from "styled-components";
import { theme } from "../globals/Theme";

export const NavList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;

    & a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.basic};
        padding: ${({ theme }) => theme.size.sm};
        font-size: ${({ theme }) => theme.size.xs};
    }

    & a:hover {
        text-decoration: underline;
    }

    & a:active {
        color: ${({ theme }) => theme.colors.blueLight};
    }
`