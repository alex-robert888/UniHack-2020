import './TheLandlordPage.scss';
import TheHeader from '../the-header/TheHeader'
import TheLandlordAddTenant from './TheLandlordAddTenant';

const TheLandlordPage = () => {
    return (
        <div>
            <TheHeader  isLogged={true} type="landlord"/>
            <div className='the-landlord-page' class="glb-page">
                
            </div>
        </div>
    );
}

export default TheLandlordPage;