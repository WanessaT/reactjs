
import { HeaderStyle } from "../styled-components/Header.style"
import { H1 } from "../styled-components/H1.style"
import { ParagraphHead } from "../styled-components/ParagrafhHead.style"

export function Header({pagina}) {
    return (
        <>
            <HeaderStyle pagina={pagina}>
                <ParagraphHead>de 12 à 13 de Outubro</ParagraphHead>
                <H1>TECH <span>DAY</span></H1>
                <ParagraphHead><img src="../assets/location.svg" alt="" />Fábrica de Devs</ParagraphHead>
                <ParagraphHead>Rua dos Bobos, 0 - Jardim Encantado</ParagraphHead>
            </HeaderStyle>
        </>
    )
}
