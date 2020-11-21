import {useState, Fragment} from 'react';
import './TheTenantPage.scss';
import '../../style/classes.scss';
import TheTenantPageReportIssue from './TheTenantPageReportIssue';
import BaseIssueHistory from '../base/BaseIssueHistory';

const TheTenantPage = () => {
    let [listIssues, setListIssues] = useState([
        // ISSUES should be taken from the db for a given user - from localStorage
    ])
    return (
        <section className='glb-page main-tenant'>
            <BaseIssueHistory 
                className='left-section'
                listIssues={listIssues}
            />
            <TheTenantPageReportIssue 
                className='right-section'
            />
        </section>
    );
}

export default TheTenantPage;