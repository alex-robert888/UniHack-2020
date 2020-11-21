
import './TheLandlordTableOfTenants.scss';

import TheLandlordTableCard from './TheLandlordTableCard';

const TheLandlordTableOfTenants = () => {
    return (
        <div className='the-landlord-table-of-tenants glb-base-container'>
            <h2 className='glb-h2-bold'>Monitor you tenants</h2>
            <TheLandlordTableCard addressDescription="Romania, Cluj-Napoca, Str. M.Kogalniceanu, Nr.18., Bl. 3, Un .A., Ap. 14" />
        </div>
    );
}

export default TheLandlordTableOfTenants;