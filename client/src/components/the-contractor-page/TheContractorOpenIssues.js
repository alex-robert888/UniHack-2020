import './TheContractorOpenIssues.scss';
import '../../style/classes.scss';
import { useState, useEffect } from 'react';
import BaseIssueCard from '../base/BaseIssueCard';
import axios from 'axios';

const TheContractorOpenIssues = () => {

    let [htmlAddresses, setHtmlAddresses] = useState([])
    let openIssues = [];

    async function loadData(){
        // go into the db and take all the open issues
        let allIssues = (await axios.get('http://localhost:5000/routes/issues/'));
        allIssues = allIssues.data;
        openIssues = allIssues.filter(issue => issue.status === "open");
    }

    useEffect(async () => {
        await loadData();
        console.log(openIssues);
        setHtmlAddresses(openIssues.map(openIssue => (
            <div className="open-issue-card" key={openIssue.title}>
                <BaseIssueCard
                    
                    postedDate={openIssue.date_opened} 
                    title={openIssue.title}
                    description={openIssue.description}
                    tag={openIssue.status}
                    button="Ok"
                />
            </div>
        )))
    }, [])

    return (
        <section className="the-contractor-open-issues glb-base-container">
            <label className="glb-h2">Open Issues</label>
            {htmlAddresses}
        </section>
    );
}

export default TheContractorOpenIssues;