
import styled from "styled-components";
import { theme } from "../globals/Theme";

export const H1 = styled.h1`
    font-size: ${({ theme }) => theme.size.l};
    padding: ${({ theme }) => theme.size.sm};

    & span {
        font-weight: 100;
    }
`
