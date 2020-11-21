
import './TheLandlordTableCard.scss';
import TheLandlordAddTenant from './TheLandlordAddTenant';
import TheHeaderProfileSection from '../the-header/TheHeaderProfileSection';

const TheLandlordTableCard = ({addressDescription, listOfTenants}) => { // listOfTenants(fullname, img)
    const htmlListOfTenants = listOfTenants.map((tenant) => 
        <li>
            <img src={tenant.picture} alt="profie picture" className="round-small-img" />
            <span>{tenant.fullname}</span>
        </li>
    );
    
    return (
        <div className='the-landlord-table-card glb-base-container-smaller'>
            <h4><span className="span-address-title">Address</span>: {addressDescription}</h4>
            <div className="the-landlord-table-card-main">
                <div className="the-landlord-table-card-main-left">
                    <p>Your tenants: </p>
                    <ul>
                        {htmlListOfTenants}
                    </ul>
                </div>
                <div className="the-landlord-table-card-main-right">
                    <TheLandlordAddTenant />
                </div>
            </div>
        </div>
    );
}

export default TheLandlordTableCard;