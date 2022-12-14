import Carrusel from "../components/Carrousel";
import Slider from "../images/slider.png"
import HomeProducts from "../components/homeProducts";
import Container from 'react-bootstrap/Container';
import Marcas from "../components/Marcas";
import Ferrum from "../images/ferrum.png"
import Delta from "../images/delta.png"
import Tigre from "../images/Logo-Negativo.png"
import Ips from "../images/logo_ips.png"

const Home = () => {
    return (
        <>
            <Container>
                <Carrusel imagen={Slider}> </Carrusel>
                <h3>Productos destacados</h3>
                <HomeProducts />
                <Marcas marca1={Ferrum} marca2={Delta} marca3={Tigre} marca4={Ips}></Marcas>
            </Container>
        </>
    )
}

export default Home;