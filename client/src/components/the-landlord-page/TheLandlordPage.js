import './TheLandlordPage.scss';
import TheHeader from '../the-header/TheHeader'
import TheLandlordPageTableOfTenants from './TheLandlordTableOfTenants';
import BaseIssueHistory from '../base/BaseIssueHistory';

const TheLandlordPage = () => {
    return (
        <div>
            <TheHeader isLogged={true} type="landlord"/>
            <div className='the-landlord-page' className="glb-page">
                <div className="the-landlord-page-cards">
                    <div className='left-section'>
                        <BaseIssueHistory />
                    </div>

                    <div className='right-section'>
                        <TheLandlordPageTableOfTenants />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TheLandlordPage;