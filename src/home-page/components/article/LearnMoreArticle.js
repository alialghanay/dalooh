import './LearnMoreArticle.css';
import photo from './Startseite-1.png';

function LearnMoreArticle() {
    return (
        <article id='learnmore'>
            <div className='learn-text'>
                <h1>{`digital outdoor advertising reaches your target group`.toUpperCase()}</h1>
                <p>
                    Digital outdoor advertising is trendy.<br />
                    She reaches everyone classes of the population,
                    is part of the modern cityscape and meets with a high level of acceptance among the general public.<br />
                    Flexible bookable, 
                    wide-ranging and target group-specific Demand for this form of advertising has risen sharply.
                </p>
            </div>

            <img src={photo} alt='DALOOH Example' id='learn-img' />
        </article>
    )
}

export default LearnMoreArticle;