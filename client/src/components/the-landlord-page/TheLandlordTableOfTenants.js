
import './TheLandlordTableOfTenants.scss';

import TheLandlordTableCard from './TheLandlordTableCard';
import TheLandlordAddTenant from './TheLandlordAddTenant';
import defaultProfilePicture from '../../assets/img/icons/default-profile-picture.svg'
import axios from 'axios';


const TheLandlordTableOfTenants = () => {

    let [addresses, setAddresses] = useState([]);
    let []

    const listAddresse

    async function loadData() {
        setAddresses(await axios.get(`http://localhost:5000/routes/addresses/bylandlord/${sessionStorage.getItem('public_id')}`));
        for (a in addresses) {

        }
    }

    return (
        <div className='the-landlord-table-of-tenants glb-base-container'>
            <h2 className='glb-h2-bold'>Monitor you tenants</h2>
            <TheLandlordTableCard 
                addressDescription="Romania, Cluj-Napoca, Str. M.Kogalniceanu, Nr.18., Bl. 3, Un .A., Ap. 14"
                listOfTenants={[
                    {fullname: "Andrei Zamfir", picture: process.env.PUBLIC_URL + "/userImages/" + 'default-profile-picture.svg'},
                    {fullname: "Alex Stan", picture: process.env.PUBLIC_URL + "/userImages/" + 'default-profile-picture.svg'}
                ]}
            />
        </div>
    );
}

export default TheLandlordTableOfTenants;