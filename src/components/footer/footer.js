import logo from './Alekhwa-logo.svg';
import instagram from './insta.svg';
import facebook from './face.svg';
import linkedin from './linkedin.svg';
import './footer.css';

function Footer() {
   return (
    <div id="footer">
        <a href="https://www.alekhwa.ly" target="_target">
            <img src={logo} alt="" id="footer-logo"/>
        </a>

        <p>©2023 by AL EKHWA</p>
        
        <div id='socail-media'>
            <a href="https://www.alekhwa.ly" target="_target">
                <img src={instagram} alt="" className="socail-media-logo"/>
            </a>
            <a href="https://www.facebook.com/alekhwa.ads" target="_target">
                <img src={facebook} alt="" className="socail-media-logo"/>
            </a>
            <a href="https://www.alekhwa.ly" target="_target">
                <img src={linkedin} alt="" className="socail-media-logo"/>
            </a>
        </div>
        
    </div>
   );
}

export default Footer;