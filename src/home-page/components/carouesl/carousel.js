import { Splide } from '@splidejs/react-splide';
import './carousel.css';
import '@splidejs/react-splide/css';
import Slider from './slider';
import svgU from './Frameu.svg';
import svgD from './Framed.svg';

const dir = require('./img/index');

function Carousel(props) {
    return (
        <div id="carouesl">
            <Splide aria-label="carousel-heading" tag="section" data-splide='{"type":"loop","perPage":3}'>
                {dir().map(x => <Slider>{x}</Slider>)}
            </Splide>
            <img src={svgU} alt='' id='car-svgU'  className='car-svg'/>
            <img src={svgD} alt='' id='car-svgD' className='car-svg'/>
        </div>
    )
}

export default Carousel;