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
                try {
                    const issuesList = await axios.get(`http://localhost:5000/routes/issues/bycontractor/${public_id}`);

                    setHtmlIssuesList(issuesList.data.map(issue => {
                        let buttonMessage = 'yad yad';
                        console.log(issue.status);
                        if (issue.status === 'closed' && public_id[0] === 'c')
                         {
                             buttonMessage = '';
                         }     
                        else if (issue.status === 'open' && public_id[0] === 'c') {
                            return '';
                        }
                        else if (issue.status === 'pending' && public_id[0] === 'c') {
                            return '';
                        }
                       // console.log(buttonMessage);
                        return (
                        <BaseIssueCard 
                            key={issue._id} 
                            issue_pid={issue.public_id}
                            title={issue.title} 
                            description={issue.description} 
                            postedDate={issue.createdAt} 
                            tag={issue.status}  
                            button={buttonMessage}
                        />
                    )}
                    ));

                }
                catch (exception) {
                    alert(exception);
                    return;
                }
            }
            // alert(tenantByID.data.address_pid); CORECT
            // toate adresele pt un landlord
            // pentru fiecare adresa luata trebuie sa iau issuirile corespunzatoare
            // 
            
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

        const sessionPublicId = sessionStorage.getItem('public_id');

        console.log("issuesList: ", issuesList.data);
        setHtmlIssuesList(issuesList.data.map(issue => {
            let buttonMessage = '';
            if (issue.status === 'accepted' && sessionPublicId[0] === 't')
            {
                buttonMessage = 'mark solved';
            }     
            else if (issue.status === 'solved' && sessionPublicId[0] === 't') {
                buttonMessage = '';
            }
            console.log(buttonMessage);
            return (
            <BaseIssueCard 
                key={issue._id} 
                issue_pid={issue.public_id}
                title={issue.title} 
                description={issue.description} 
                postedDate={issue.createdAt} 
                tag={issue.status}  
                button={buttonMessage}
            />
        )}
        ));

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