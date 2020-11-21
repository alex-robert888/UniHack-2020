import './BaseIssueHistory.scss';
import '../../style/classes.scss';

const BaseIssueHistory = (props) => { // props.listIssues - list of BaseIssueCard
    return (
        <section className='glb-base-container main-issue-history'>
            <label className="glb-h2">Your Issues History</label>
            {props.listIssues}
        </section>
    );
}

export default BaseIssueHistory;