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
        openIssues = allIssues.filter(issue => issue.status === "open" || issue.status === "pending");
    }

    useEffect(async () => {
        await loadData();
        const public_id = sessionStorage.getItem('public_id');
        if(public_id[0] === 't'){
            setHtmlAddresses(openIssues.map(openIssue => (
                <div className="open-issue-card" key={openIssue._id}>
                    <BaseIssueCard
                        issue_pid={openIssue.public_id}
                        postedDate={openIssue.date_opened} 
                        title={openIssue.title}
                        description={openIssue.description}
                        tag={openIssue.status}
                        button="Ok"
                    />
                </div>
            )))
        }else if(public_id[0] === 'c'){
            setHtmlAddresses(openIssues.map(openIssue => (
                <div className="open-issue-card" key={openIssue._id}>
                    <BaseIssueCard
                        issue_pid={openIssue.public_id}
                        postedDate={openIssue.date_opened} 
                        title={openIssue.title}
                        description={openIssue.description}
                        tag="open"
                        button="Ok"
                    />
                </div>
            )))
        }
    }, [])

    return (
        <section className="the-contractor-open-issues glb-base-container">
            <label className="glb-h2">Open Issues</label>
            {htmlAddresses}
        </section>
    );
}

export default TheContractorOpenIssues;