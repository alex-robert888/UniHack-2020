import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './TheAddressForm.scss';
import '../../style/classes.scss';
import '../base/BaseInputText';
import BaseInputText from '../base/BaseInputText';
import axios from 'axios';
import TheHeader from '../the-header/TheHeader';

const TheAddressForm = () => {

    let [street, setStreet] = useState('');
    let [buildingNumber, setBuildingNumber] = useState('');
    let [unit, setUnit] = useState('');
    let [apartment, setApartment] = useState('');
    let [country, setCountry] = useState('');
    let [city, setCity] = useState('');
    let [history, setHistory] = useState(useHistory());

    async function addNewAddress(event) {
        event.preventDefault();
        const landlord_pid = sessionStorage.getItem('public_id');
        alert(landlord_pid);
        try{
            await axios.post('http://localhost:5000/routes/addresses/add', {
                country: country,
                city: city,
                street: street,
                building_number: buildingNumber,
                unit: unit,
                apartment: apartment,
                landlord_pid: landlord_pid
            })
        }catch(exception) {
            alert(exception);
        };

        history.push("/landlord");
    }

    return (
        <div>
            <TheHeader isLogged={true} type="landlord"/>
            <section className="glb-page glb-base-container address-section">
                <form className="address-form glb-base-form">
                    <BaseInputText title="Street" type="text" valueUpdated={(event) => setStreet(event)}/>
                    <BaseInputText title="Building Number" type="text" valueUpdated={(event) => setBuildingNumber(event)}/>
                    <BaseInputText title="Unit" type="text" valueUpdated={(event) => setUnit(event)}/>
                    <BaseInputText title="Apartment" type="text" valueUpdated={(event) => setApartment(event)}/>
                    <BaseInputText title="Country" type="text" valueUpdated={(event) => setCountry(event)}/>
                    <BaseInputText title="City" type="text" valueUpdated={(event) => setCity(event)}/>
                    <section className="address-form-footer">
                        <button className="glb-base-outlined-button" onClick={addNewAddress}>Add</button>
                        <a href="/landlord">Back</a>
                    </section>
                </form>
            </section>
        </div>
    );
}

export default TheAddressForm;