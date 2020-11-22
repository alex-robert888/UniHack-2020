
import './TheHeroSection.scss';
import '../../style/classes.scss'
import theHeroSectionImage from '../../assets/img/non-svg/the-hero-section.png';

const TheHeroSection = () => {
    return (
        <section className='the-hero-section'>
            <section className='the-hero-section-left'>
                <h1>Connecting tenants, landlords & contractors quicker than ever</h1>
                <h2>Untangling property rental & maintenance for both the landlord and the tenant, while also facilitating the job finding process for contractors.</h2>
                <a href="/auth/signup" target="_parent"><button className="glb-base-filled-button">Get Started</button></a>
            </section>
            <section className='the-hero-section-right'>
                <img src={theHeroSectionImage} alt=""/>
            </section>
        </section>
    );
}

export default TheHeroSection;