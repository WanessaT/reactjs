
import { Wrapper } from "./styled-components/Wrapper.style"
import { Nav } from "./components/Nav"
import { Header } from "./components/Header"
import { BannerProg } from "./components/BannerProg"

function App() {

  return (
    <Wrapper>
      <Nav />
      <Header pagina={1}/>
      <BannerProg />
    </Wrapper>
  )
}

export default App
