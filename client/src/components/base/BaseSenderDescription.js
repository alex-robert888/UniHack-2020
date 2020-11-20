import './BaseSenderDescription.scss';
import './BaseTagType';
import './BaseTelephone';
import BaseReviewStars from './BaseReviewStars';
import BaseTagType from './BaseTagType';
import BaseTelephone from './BaseTelephone';

const BaseSenderDescription = (props) => { // userType(Tenant,Landlord,...), name, phoneNumber, starsCount
    return (
        <article className="base-sender-description">
            <span className="span-message">From:</span>
            <span className="entity">{props.name}</span>
            <div className="entity">
                <BaseTagType tag={props.userType}></BaseTagType>
            </div>
            <div className="entity">
                <BaseTelephone phoneNumber={props.phoneNumber}></BaseTelephone>
            </div>
            {props.userType !== 'Tenant' && props.userType !== 'Landlord' ? 
            <div className="entity">
                <BaseReviewStars starsCount={props.starsCount}></BaseReviewStars>
            </div>
            : ""
            }
        </article>
    );
}

export default BaseSenderDescription;

/*
<BaseSenderDescription 
                userType="Electrician" 
                name="CrinDaniel" 
                phoneNumber="0765482912"
                starsCount={5}
            ></BaseSenderDescription>
*/