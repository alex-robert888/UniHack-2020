
import './TheLandlordTableCard.scss';

const TheLandlordTableCard = ({addressDescription, listOfTenants}) => {
    return (
        <div className='the-landlord-table-card glb-base-container-smaller'>
            <h4><span className="span-address-title">Address</span>: {addressDescription}</h4>
            <div className="the-landlord-table-card-main">
                <div className="the-landlord-table-card-main-left">
                    <h5>List of tenants</h5>
                    <ul>
                        <li>andrei</li>
                        <li>robert</li>
                    </ul>
                </div>
                <div className="the-landlord-table-card-main-right">
                    <h5>Add tenant: </h5>
                </div>
            </div>
        </div>
    );
}

export default TheLandlordTableCard;