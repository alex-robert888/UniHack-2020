import './BaseAcceptContractor.scss';
import RejectIcon from '../../assets/img/icons/reject-button.svg';
import '../../style/classes.scss';

const BaseAcceptContractor = (props) => { // estimatedPrice, contractor_id, user_id
    let rejectHandler = () => {
        console.log("Reject");
    }

    let acceptHandler = () => {
        console.log("Accept");
    }

    return (
        <article className="article-section">
            <section className="top-section glb-base-form">
                <span className="top-section-head">Estimated price:</span>
                <span className="top-section-price">${props.estimatedPrice}</span>
            </section>
            <section className="bottom-section">
                <img src={RejectIcon} alt="reject-button" className="reject-button" onClick={rejectHandler}/>
                <button className="glb-base-filled-button" onClick={acceptHandler}>Accept</button>
            </section>
        </article>
    );
}

export default BaseAcceptContractor;

/*
<BaseAcceptContractor
    estimatedPrice={20}
    sender_id={1}
    receiver_id={2}
></BaseAcceptContractor>
*/