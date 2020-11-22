import './TheBenefitsSection.scss';
import TheBenefitsSectionCard from './TheBenefitsSectionCard';

const TheBenefitsSection = () => {
    return (
        <section className="main-section-benefits">
            <span className="title-section">WIN-WIN-WIN</span>
            <section className="cards-section">
                <TheBenefitsSectionCard title="Tenant" text="Start picking-up short-term jobs, 
                    and grow your reputation as a 
                    contractor through our platform.
                    Become your own boss and enjoy 
                    your work, there are always plenty 
                    of issues, which you can accept 
                    even from today by joining our platform."/>
                <TheBenefitsSectionCard title="Landlord" text="Get any maintenance issues fixed 
                    quickly & efortlessly, by simply 
                    posting a brief summary of your 
                    problem on our platform and selecting
                    from one of the contractors that 
                    will offer to solve your problem 
                    for a given price."/>
                <TheBenefitsSectionCard title="Contractor" text="Keep your tenants close, 
                    even if you rented only one 
                    property.Within our platform 
                    you can easily pay contractors
                    and get any issue fixed effortlessly.
                    Make an account today, and keep your 
                    business organized."/>
            </section>
        </section>
    );
}

export default TheBenefitsSection;