import {useState} from 'react';
import './TheLandlordAddTenant.scss';
import '../../style/classes.scss';
import BaseInputText from '../base/BaseInputText';
import axios from 'axios';

const TheLandlordAddTenant = (props) => { // props.addressPid - the address where to add the tenant

    let [tenantPid, setTenantPid] = useState('');
    let addressPid = props.addressPid;

    async function addNewTenant(){
        try{
            await axios.put(`http://localhost:5000/routes/tenants/change_address/${tenantPid}`, {
                address_pid: addressPid
            })
        }catch(exception) {
            alert(exception);
        };
    }

    return (
        <section className='section-add-tenant'>
            <label>Add a new tenant</label>
            <BaseInputText type="text" valueUpdated={(event) => setTenantPid(event)}/>
            <label className='info-add-tenant'>*Ask them for their unique code</label>
            <button className="glb-base-outlined-button" onClick={addNewTenant}>Add</button>
        </section>
    );
}

export default TheLandlordAddTenant;