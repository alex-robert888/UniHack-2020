import './TheLandlordPage.scss';
import TheHeader from '../the-header/TheHeader'
import TheLandlordPageTableOfTenants from './TheLandlordTableOfTenants';


const TheLandlordPage = () => {
    return (
        <div>
            <TheHeader isLogged={true} type="landlord"/>
            <div className='the-landlord-page glb-page'>
                <div className="the-landlord-page-cards">
                    <TheLandlordPageTableOfTenants />
                </div>
            </div>
        </div>
    );
}

export default TheLandlordPage;