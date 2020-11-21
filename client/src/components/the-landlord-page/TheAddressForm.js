import './TheAddressForm.scss';
import '../../style/classes.scss';
import '../base/BaseInputText';
import BaseInputText from '../base/BaseInputText';

const TheAddressForm = () => {
    return (
        <section className="address-section">
            <form className="address-form glb-base-form">
                <BaseInputText title="Street" type="text" valueUpdated={() => {}}/>
                <BaseInputText title="Building Number" type="text" valueUpdated={() => {}}/>
                <BaseInputText title="Apartment" type="text" valueUpdated={() => {}}/>
                <BaseInputText title="Country" type="text" valueUpdated={() => {}}/>
                <BaseInputText title="City" type="text" valueUpdated={() => {}}/>
                <button className="glb-base-outlined-button">Add</button>
            </form>
        </section>
    );
}

export default TheAddressForm;