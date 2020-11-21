import {useState} from 'react';
import './TheTenantPageReportIssue.scss';
import '../../style/classes.scss';
import '../base/BaseInputText';
import BaseInputText from '../base/BaseInputText';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const TheTenantPageReportIssue = (props) => { // buttonFinishedPressed() ; buttonFinishPressed={() => loadDataToContext()}

    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [history, setHistory] = useState(useHistory());

    async function storeNewIssue() {
        console.log(title, description, localStorage.getItem('123'));
        try {
            let loginData = await axios.post(`http://localhost:5000/auth/login/`, {
                title: title,
                description: description
            })
        
        }
        catch(exception) {
            alert("MESSAGE: ", exception);
        } 

    }

    return (
        <form className="glb-base-container main-report-issue">
            <label className="glb-h2">Report a new Issue</label>
            <BaseInputText title='title' type='text' valueUpdated={ title => setTitle(title) } />
            <BaseInputText title='description' type='text' valueUpdated={ description => setDescription(description) } />
            <button className="glb-base-filled-button" onClick={() => props.buttonFinishPressed()}>Report</button>
        </form>
    );
}

export default TheTenantPageReportIssue;