
import styled from "styled-components";
import { theme } from "../globals/Theme";

export const ImgBanner = styled.img`
    width: 25%;
    height: ${({ theme }) => theme.size.xxl2};
    margin: auto 1rem;
    border-radius: ${({ theme }) => theme.size.x};

    &:hover {
        transform: scale(1.1);
        transition: 0.5s;
    }
   `
