
import { ImgBanner } from "./styles/ImgBanner.style"
import { Banner } from "./styles/Banner.style"
import { H2 } from "./styles/H2.style"
import { ParagrafhGeral } from "./styles/ParagrafhGeral.style"

export function BannerProg() {
    return (
        <>
            <H2>Confira a galera massa que vai estar palestrando nesse Tech Day <img src="./src/assets/arrow_downward.svg" alt="" /></H2>
            <ParagrafhGeral fontWeight='600'>Dia 12/10</ParagrafhGeral>
            <Banner>
                <ImgBanner src="./src/assets/karol-attekita.jpg" alt="" />
                <ImgBanner src="./src/assets/matheus-battisti.jpg" alt="" />
                <ImgBanner src="./src/assets/matheus-fraga.jpg" alt="" />
                <ImgBanner src="./src/assets/rafaella-ballerini.jpg" alt="" />
            </Banner>
            <Banner>
            <ParagrafhGeral>Karol Attekita - Attekita Dev</ParagrafhGeral>
            <ParagrafhGeral>Matheus Battisti - Fullstack Developer</ParagrafhGeral>
            <ParagrafhGeral>Matheus Fraga - Hora de Codar</ParagrafhGeral>
            <ParagrafhGeral>Rafa Ballerini - Rafaella Ballerini</ParagrafhGeral>
            </Banner>

            <ParagrafhGeral fontWeight='600'>Dia 13/10</ParagrafhGeral>
            <Banner>
                <ImgBanner src="./src/assets/gustavo-guanabara.png" alt="" />
                <ImgBanner src="./src/assets/ricardo-roberto.jpg" alt="" />
                <ImgBanner src="./src/assets/vanessa-weber.jpg" alt="" />
                <ImgBanner src="./src/assets/diego-fernandes.png" alt="" />
            </Banner>
            <Banner>
            <ParagrafhGeral>Gustavo Guanabara - Curso em Vídeo</ParagrafhGeral>
            <ParagrafhGeral>Ricardo e Roberto - Dev em Dobro</ParagrafhGeral>
            <ParagrafhGeral>Vanessa Weber - Código Fonte TV</ParagrafhGeral>
            <ParagrafhGeral>Diego Fernandes - Rocketseat</ParagrafhGeral>
            </Banner>
        </>
    )
}
