import './TheHomePage.scss';
import '../../style/classes.scss';
import BaseIssueCard from '../base/BaseIssueCard';
import BaseTagStatus from '../base/BaseTagStatus';
import TheHeader from '../the-header/TheHeader';
import AddressForm from '../the-landlord-page/TheAddressForm';
<<<<<<< HEAD
import TheAboutUsSection from './TheAboutUsSection';
import TheBenefitsSection from './TheBenefitsSection';
=======
import TheHeroSection from '../the-home-page/TheHeroSection';
import TheVideoSection from '../the-home-page/TheVideoSection';
import TheOurMissionSection from '../the-home-page/TheOurMissionSection';
import TheBenefitsSection from '../the-home-page/TheBenefitsSection';
import TheAboutUsSection from '../the-home-page/TheAboutUsSection';
import TheFooter from '../the-home-page/TheFooter';

>>>>>>> 6c4a2bda3dc09a72a35071ca4457ef4c7a59c36a

const TheHomePage = () => {
    
    return (
        <div>
            <TheHeader />
            <div className="glb-page">
<<<<<<< HEAD
                
            </div>
=======
                <TheHeroSection />
                <TheVideoSection />
                <TheOurMissionSection />
            </div>
            <TheFooter />
>>>>>>> 6c4a2bda3dc09a72a35071ca4457ef4c7a59c36a
        </div>
    );
}

export default TheHomePage;