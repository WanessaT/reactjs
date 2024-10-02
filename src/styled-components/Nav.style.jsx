
import styled from "styled-components";
import { theme } from "../components/globals/Theme";

export const NavStyle = styled.nav`
    width: 100vw;
    height: ${({ theme }) => theme.size.m};
    background-color: ${({ theme }) => theme.colors.dark};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    & img {
        width: ${({ theme }) => theme.size.xxl};
    }
`