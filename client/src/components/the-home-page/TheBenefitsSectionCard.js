import './TheBenefitsSectionCard.scss';
import Tenant from '../../assets/img/illustrations/home-page-tenant.svg';
import Landlord from '../../assets/img/illustrations/home-page-landlord.svg';
import Contractor from '../../assets/img/illustrations/home-page-contractor.svg';
import '../../style/classes.scss';

const TheBenefitsSectionCard = ({title, text}) => {
    let img = "";
    if(title === "Tenant"){
        img = Tenant;
    }else if(title === "Landlord"){
        img = Landlord;
    }else if(title === "Contractor"){
        img = Contractor;
    }
    return (
        <section className="main-section">
            <section className="top-section">
                <img src={img} alt={"default-"+title.toLower()}/>
                <span className="top-title">{title}</span>
            </section>
            <section className="middle-section">
                <p>{text}</p>
            </section>
            <section className="bottom-section">
                <button className="glb-base-outlined-button"></button>
            </section>
        </section>
    );
}

export default TheBenefitsSectionCard;