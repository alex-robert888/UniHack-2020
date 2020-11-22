import './TheHomePage.scss';
import '../../style/classes.scss';
import BaseIssueCard from '../base/BaseIssueCard';
import BaseTagStatus from '../base/BaseTagStatus';
import TheHeader from '../the-header/TheHeader';
import AddressForm from '../the-landlord-page/TheAddressForm';
import TheHeroSection from '../the-home-page/TheHeroSection';
import TheVideoSection from '../the-home-page/TheVideoSection';
import TheOurMissionSection from '../the-home-page/TheOurMissionSection';
import TheBenefitsSection from '../the-home-page/TheBenefitsSection';
import TheAboutUsSection from '../the-home-page/TheAboutUsSection';
import TheFooter from '../the-home-page/TheFooter';


const TheHomePage = () => {
    
    return (
        <div>
            <TheHeader />
            <div className="glb-page">
                <TheHeroSection />
                <TheVideoSection />
                <TheOurMissionSection />
                <TheBenefitsSection />
                <TheAboutUsSection />
            </div>
            <TheFooter />
        </div>
    );
}

export default TheHomePage;