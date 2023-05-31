import { SplideSlide } from '@splidejs/react-splide';

function Slider(props) {
    return (
        <SplideSlide>
            <img src={props.children} alt="" className='carImg' />
        </SplideSlide>
    )
}

export default Slider;