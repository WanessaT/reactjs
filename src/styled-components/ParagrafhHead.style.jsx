
import styled from "styled-components";
import { theme } from "../components/globals/Theme";

export const ParagraphHead = styled.p`
    font-size: ${({ theme }) => theme.size.xs};

    & img {
        margin-right: 0.1rem;
    }
`
