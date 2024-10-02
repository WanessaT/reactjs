
import { NavStyle } from "./styles/Nav.style"
import { NavList } from "./styles/NavList.style"

export function Nav() {
    return (
        <>
            <NavStyle>
                <img src="./src/assets/tech-day.png" alt="" />
                <NavList>
                    <a href="#">Página Inicial</a>
                    <a href="#">Programação</a>
                    <a href="#">Palestrantes</a>
                    <a href="#">Local</a>
                </NavList>
            </NavStyle>
        </>
    )
}
