import Numbers from './numbers';
import json from './contant.json';
import './statistic.css';

function Statistic() {
    return (
        <div id='statistic'>
            <h1>Libya's Leading Out of Home company</h1>
            <div id='s-numbers'>
                {json.map(x => <Numbers>{x}</Numbers>)}
            </div>
            <div className='com-text'>
                <p>DALOOH Media is changing the face of the Out of Home industry in Libya.</p>
                <p>We work with <strong><a href='#partners'>advertisers</a></strong>, <strong><a href='#partners'>media agencies</a></strong>, <strong><a href='#partners'>partners</a></strong> and <strong><a href='#partners'>communities</a></strong> to engage people with Out of Home experiences that educate, engage, inform and inspire.</p>
            </div>
        </div>
    )
}


export default Statistic;