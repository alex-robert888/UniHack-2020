
import './TheLandlordTableCard.scss';
import TheLandlordAddTenant from './TheLandlordAddTenant';
import TheHeaderProfileSection from '../the-header/TheHeaderProfileSection';
import BaseIssueCard from '../base/BaseIssueCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

const TheLandlordTableCard = ({addressPid, addressDescription, listOfTenants}) => { // listOfTenants(fullname, img)
    
    let issuesList = [];
    let [htmlIssuesList, setHtmlIssuesList] = useState();
    
    const htmlListOfTenants = listOfTenants.map((tenant) => 
        <li key={tenant.fullname}>
            <img src={tenant.picture} alt="profie picture" className="round-small-img" />
            <span>{tenant.fullname}</span>
        </li>
    );
    
    async function extractIssues() {
        try {
            issuesList = await axios.get(`http://localhost:5000/routes/issues/byaddress/${addressPid}`);
            console.log(issuesList);
        }
        catch(exc) {
            alert(exc);
        }
    }

    useEffect(async () => {
        await extractIssues();
        if (!issuesList.data) {
            return;
        }

        setHtmlIssuesList(issuesList.data.map(issue => {               
            
            if (issue.status == 'pending') {
                return  <BaseIssueCard 
                    key={issue._id} 
                    issue_pid={issue.public_id}
                    title={issue.title} 
                    description={issue.description} 
                    postedDate={issue.createdAt} 
                    tag={issue.status}
                    button='Accept'
                    price={issue.price}
                />
            }

            if (issue.status == 'open') {
                return  <BaseIssueCard 
                    key={issue._id} 
                    issue_pid={issue.public_id}
                    title={issue.title} 
                    description={issue.description} 
                    postedDate={issue.createdAt} 
                    tag={issue.status}
                />
            }

            return "";
            
        }
        
        ))
    }, []);

    return (
        <div className='the-landlord-table-card glb-base-container-smaller'>
            <h4><span className="span-address-title">Address</span>: {addressDescription}</h4>
            <div className="the-landlord-table-card-main">
                <div className="the-landlord-table-card-main-left">
                    <p>Your tenants: </p>
                    <ul>
                        {htmlListOfTenants}
                    </ul>
                </div>
                <div className="the-landlord-table-card-main-right">
                    <TheLandlordAddTenant addressPid={addressPid} />
                </div>

            </div>
            
            <div className='your-tenant-issues'>
                {htmlIssuesList}
            </div>
            
        </div>
    );
}

export default TheLandlordTableCard;