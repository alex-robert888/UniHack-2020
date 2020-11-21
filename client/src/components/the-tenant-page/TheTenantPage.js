import {useState, Fragment} from 'react';
import './TheTenantPage.scss';
import '../../style/classes.scss';
import TheTenantPageReportIssue from './TheTenantPageReportIssue';
import BaseIssueHistory from '../base/BaseIssueHistory';
import TheHeader from '../the-header/TheHeader';

const TheTenantPage = () => {
    let [listIssues, setListIssues] = useState([
        // ISSUES should be taken from the db for a given user - from localStorage
    ])

    return (
        <div>
            <TheHeader isLogged={true} type="tenant"/>
            <section className='glb-page main-tenant'>
                <div className="main-tenant-forms">
                    <div className='left-section'>
                        <BaseIssueHistory />
                    </div>

                    <div className='right-section'>
                        <TheTenantPageReportIssue />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TheTenantPage;