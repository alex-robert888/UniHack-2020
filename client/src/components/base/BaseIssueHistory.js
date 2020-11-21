import './BaseIssueHistory.scss';
import '../../style/classes.scss';

import BaseIssueCard from './BaseIssueCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BaseIssueHistory = () => { // props.listIssues - list of BaseIssueCard
    let issuesList = [];
    let [htmlIssuesList, setHtmlIssuesList] = useState([]);

    async function loadUserIssues() {
        const public_id = sessionStorage.getItem('public_id');
        let types = "";
        if(public_id[0] === 't'){
            types = "tenants";
        }else if(public_id[0] === 'l'){
            types = 'landlords';
        }else if(public_id[0] === 'c'){
            types = 'contractors';
        }
        const userByID = await axios.get(`http://localhost:5000/routes/${types}/getbypid/${public_id}`)
        if(userByID.data){
            if(types === "tenants"){
                issuesList = await axios.get(`http://localhost:5000/routes/issues/byaddress/${userByID.data.address_pid}`);
            }else if(types === "contractors"){
                // waiting
            }           
            //console.log(tenanantIssuesList);
            //setIssuesList(tenanantIssuesList);
            console.log(issuesList);
        }
    }

    useEffect(async () => {
        await loadUserIssues();
        if(!issuesList.data){
            return;
        }
        console.log("issuesList: ", issuesList.data);
        setHtmlIssuesList(issuesList.data.map(issue => (
            <BaseIssueCard 
                key={issue._id} 
                issue_pid={issue.public_id}
                title={issue.title} 
                description={issue.description} 
                postedDate={issue.createdAt} 
                tag={issue.status}  
                button='yada yada'
            />
        )));

        console.log(htmlIssuesList);
    }, [])
    
    return (
        <section className='glb-base-container main-issue-history'>
            {
                sessionStorage.getItem('public_id')[0] == 't' && (
                    <div className="base-issue-history-tenant">
                        <label className="glb-h2-bold">Your Issues History</label>
                        {htmlIssuesList}
                    </div>
                )
            }       
            {
                sessionStorage.getItem('public_id')[0] == 'l' && 
                <div className="base-issue-history-tenant">
                    <label className="glb-h2-bold">Your Tenants Issues History</label>
                    {htmlIssuesList}
                </div>
            }

            {
                sessionStorage.getItem('public_id')[0] == 'c' && 
                <div className="base-issue-history-tenant">
                    <label className="glb-h2-bold">Your Implicated Issues History</label>
                    {htmlIssuesList}
                </div>
            }
        
        </section>
    );
}

export default BaseIssueHistory;