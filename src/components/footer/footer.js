import logo_byn from '../../images/logo_byn.png';
import ubicacion from '../../images/ubicacion.png';
import mail from '../../images/mail.png';
import tel from '../../images/tel.png';
import Image from 'react-bootstrap/Image'
import './footer.css'

const Footer = () => {
    return (
        <footer id="footer" class="navbar bg-dark">
        <div className="container">
                <div >
                  <Image src={logo_byn} className="imgfooter"/>
                </div>
                <div id="centrofooter">
                  <Image src={ubicacion} width="25" className="foot"/>
                        Beiro 3300 - Villa del Parque
                  <br></br>
                    <Image src={mail}  width="25" className="foot"/>
                        contacto@sanitarioscampana.com.ar
                  </div>
                <div class="celular">
                        <Image src={tel} width="30"/>
                       4503-6015
                   
                </div>
            </div>
        
      
    </footer>
    )
}

export default Footer;
