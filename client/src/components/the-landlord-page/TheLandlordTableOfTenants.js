
import './TheLandlordTableOfTenants.scss';

import TheLandlordTableCard from './TheLandlordTableCard';
import axios from 'axios';
import { useState, useEffect } from 'react';


const TheLandlordTableOfTenants = () => {

    let addressesAndTenants = [];
    // let [addressesAndTenants, setAddressesAndTenants] = useState([2]);
    let [htmlAddresses, setHtmlAddresses] = useState([])

    async function loadData() {
        // alert(sessionStorage.getItem('public_id'));
        const public_id = sessionStorage.getItem('public_id');
        const addresses = (await axios.get(`http://localhost:5000/routes/addresses/bylandlord/${public_id}`));
        console.log("Adresses: ", addresses);
        for (let i in addresses.data) {
            console.log(addresses.data[i]);
            const tenants = await axios.get(`http://localhost:5000/routes/tenants/getbyaddress/${addresses.data[i].public_id}`);
            console.log("Tenants: ", tenants);
            const addressDescription = `${addresses.data[i].country}, ${addresses.data[i].city}, str. ${addresses.data[i].street}, bl.:${addresses.data[i].building_number}, ap.:${addresses.data[i].apartment}`;
            addressesAndTenants.push({addressPid: addresses.data[i].public_id, addressDescription: addressDescription, listOfTenants: tenants.data});
            // setAddressesAndTenants([...addressesAndTenants, {addressDescription: addressDescription, listOfTenants: tenants.data}]);
        }
        
    }

    useEffect(async () => {
        console.log('entered use effect!!!!!!!!!!!!')
        await loadData()
        console.log("ZZZZZZZZZZZ: ", addressesAndTenants);
        setHtmlAddresses(addressesAndTenants.map((address) => (
            <TheLandlordTableCard 
                key={address.addressDescription}
                addressPid={address.addressPid}
                addressDescription={address.addressDescription}
                listOfTenants={
                    address.listOfTenants.map(tenant => {
                        console.log(tenant.fullname);
                        return {
                            fullname: tenant.fullname,
                            picture: process.env.PUBLIC_URL + "/userImages/" + 'default-profile-picture.svg'
                        }
                    })
                }
            />
        )))
    }, []);


    return (
        <div className='the-landlord-table-of-tenants glb-base-container'>
            <h2 className='glb-h2-bold'>Monitor you tenants</h2>
            {htmlAddresses}
            {/* <TheLandlordTableCard 
                addressDescription="Romania, Cluj-Napoca, Str. M.Kogalniceanu, Nr.18., Bl. 3, Un .A., Ap. 14"
                listOfTenants={[
                    {fullname: "Andrei Zamfir", picture: process.env.PUBLIC_URL + "/userImages/" + 'default-profile-picture.svg'},
                    {fullname: "Alex Stan", picture: process.env.PUBLIC_URL + "/userImages/" + 'default-profile-picture.svg'}
                ]}
            /> */}
        </div>
    );
}

export default TheLandlordTableOfTenants;