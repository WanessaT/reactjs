
import styled from "styled-components";
import { theme } from "../components/globals/Theme";

export const ParagrafhGeral = styled.p`
    width: 80%;
    margin: auto;
    padding: ${({ theme }) => theme.size.xs};
    font-size: ${({ theme }) => theme.size.xs};
    color: ${({ theme }) => theme.colors.tertiary};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : 'normal'};
`
