import './BaseReviewStars.scss';
import StarIcon from '../../assets/img/icons/star-icon.svg'
// CHANGE PHONE

const BaseReviewStars = (props) => { // props.starsCount
    return (
        <article>
            {Array(props.starsCount).fill(<img src={StarIcon} alt="star-icon" className="star"/>)}
        </article>
    );
}

export default BaseReviewStars;