
import styled from "styled-components";
import { theme } from "../components/globals/Theme";

export const HeaderStyle = styled.div`
    width: 100vw;
    height: 45vh;
    background-color: ${({pagina}) => pagina == 1 ? theme.colors.primary : theme.colors.secundary};
    /* background-color: ${({ theme }) => theme.colors.tertiary}; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    color: ${({ theme }) => theme.colors.basic};
    text-shadow: 1.5px 1.5px ${({ theme }) => theme.colors.primary};
`
