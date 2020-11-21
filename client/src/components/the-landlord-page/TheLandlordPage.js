import './TheLandlordPage.scss';
import TheHeader from '../the-header/TheHeader'

const TheLandlordPage = () => {
    return (
        <div>
            <TheHeader  isLogged={true} type="landlord"/>
            <div className='the-landlord-page' class="glb-page">
                <h1>{localStorage.getItem('fullname')}</h1>
            </div>
        </div>
    );
}

export default TheLandlordPage;