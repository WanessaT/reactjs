
import styled from "styled-components";
import { theme } from "../components/globals/Theme";

export const H2 = styled.h2`
    font-size: ${({ theme }) => theme.size.s};
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: ${({ theme }) => theme.size.l};
    margin-bottom: ${({ theme }) => theme.size.m};
`
