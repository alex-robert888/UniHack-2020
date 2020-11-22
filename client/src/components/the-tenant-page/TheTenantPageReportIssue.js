import {useState} from 'react';
import './TheTenantPageReportIssue.scss';
import '../../style/classes.scss';
import '../base/BaseInputText';
import BaseInputText from '../base/BaseInputText';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const TheTenantPageReportIssue = () => { // props.addressPid buttonFinishedPressed() ; buttonFinishPressed={() => loadDataToContext()}

    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [history, setHistory] = useState(useHistory());

    async function storeNewIssue() {
        //console.log(title, description, localStorage.getItem('public_id'));
        try {
            const tenantByID = await axios.get(`http://localhost:5000/routes/tenants/getbypid/${sessionStorage.getItem('public_id')}`)
            console.log(tenantByID)
            let loginData = await axios.post(`http://localhost:5000/routes/issues/add`, {
                address_pid: tenantByID.data.address_pid,
                description: description,
                title: title,
                tenant_pid: sessionStorage.getItem('public_id')
            })
        }
        catch(exception) {
            return;
        }

        window.location.reload(false);

    }

    return (
        <form className="glb-base-container main-report-issue">
            <label className="glb-h2">Report an Issue</label>
            <BaseInputText title='title' type='text' valueUpdated={ title => setTitle(title) } />
            {/* <BaseInputText title='description' type='text' valueUpdated={ description => setDescription(description) } /> */}
            <label htmlFor="description" className="glb-base-label">DESCRIPTION</label>
            <textarea className="textarea-report" name="description" id="" cols="30" rows="10" maxLength="350" onChange={event => setDescription(event.target.value)}></textarea>
            <button type="button" className="glb-base-filled-button button-report" onClick={storeNewIssue}>Report</button>
        </form>
    );
}

export default TheTenantPageReportIssue;