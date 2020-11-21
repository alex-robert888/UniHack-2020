
import './TheHomePage.scss';
import '../../style/classes.scss';
import BaseIssueCard from '../base/BaseIssueCard';
import BaseTagStatus from '../base/BaseTagStatus';
import TheHeader from '../the-header/TheHeader';
import AddressForm from '../the-landlord-page/TheAddressForm';

const TheHomePage = () => {
    
    return (
        <div className='TheHomePage glb-page'>
            <TheHeader/>
        </div>
    );
}

export default TheHomePage;