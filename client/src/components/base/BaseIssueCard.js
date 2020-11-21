import React, {Component} from 'react';
import './BaseIssueCard.scss';
import '../../style/classes.scss';
import BaseTagStatus from './BaseTagStatus';
import axios from 'axios';
import BaseInputText from './BaseInputText';

const MAX_COUNT = 150; // take caution: issue-cards are going to be small

class BaseIssueCard extends Component{ // issue_pid, postedDate, title, description, tag, button
    constructor(props){
        super(props);
        this.state = {
            isExpanded: false,
            price: -1,
            applicantsComponent: ""
        }
        this.description_length = this.props.description.length;
    }

    expand_issue = () => {
        this.setState({isExpanded: true});
    }
    
    hide_issue = () => {
        this.setState({isExpanded: false});
    }

    trimDescription = (description) => {
        return description.substring(0,MAX_COUNT-3).trim() + "...";
    }

    proposeContractorForIssue = async newStatus => {
        const public_id_issue = this.props.issue_pid;
        const contractor_id = sessionStorage.getItem('public_id');
        try{
            let loginData = await axios.put(`http://localhost:5000/routes/issues/apply/${public_id_issue}`, {
                contractor_pid: contractor_id,
                price: this.state.price
            })
        }catch(exception){
            alert(exception);
        }
    }

    getAllApplicantsForTenant = async () => {
        //byaddress/:address_pid
        try{
            let issue = await axios.get(`http://localhost:5000/routes/issues/bypid/${this.props.issue_pid}`)
            let applicants = issue.data.applicants_list;
            let applicants_res = [];
            for(let idx=0;idx<applicants.length;idx++){
                let applicant = await axios.get(`http://localhost:5000/routes/contractors/getbypid/${applicants[idx].contractor_pid}`);
                applicants_res.push(applicant);
            }
            return applicants_res;
            
        }catch(exception){
            alert(exception);
        }
    }

    async componentDidMount(){
        this.setState({applicantsComponent: await this.getApplicantsComponents()});
        this.forceUpdate();
    }

    acceptApplicant = async (public_id) => {
        try{
            let issue = await axios.put(`http://localhost:5000/routes/issues/propose/${this.props.issue_pid}`, {
                contractor_pid: public_id,
                price: 0
            })
            
        }catch(exception){
            alert(exception);
        }
    }

    getApplicantsComponents = async () => {
        const applicants = await this.getAllApplicantsForTenant();

        if(applicants === null){
            return "";
        }
        console.log(applicants);
        const applicantsToShow = applicants.map(applicant => 
                (
                <article className="issue-card-offers glb-base-container" key={applicant.data[0].public_id}>
                    <h3>{applicant.data[0].fullname} offered to help</h3>
                    <button className="glb-base-filled-button" onClick={() => this.acceptApplicant(applicant.data[0].public_id)}>Accept</button>
                </article>
                )
            );
        
        return applicantsToShow;
    }
    

    buttonClickHandler = () => {
        if(this.state.price === -1 || isNaN(this.state.price)){
            alert('Invalid price');
        }
        if(this.props.tag === "open"){       
            this.proposeContractorForIssue();
            
            // change the 
            // notify tenant
            // 
        }else if(this.props.tag === "pending"){
            // accept something
        }

        window.location.reload(false);
    }

    

    render(){
        let description = this.state.isExpanded ? this.props.description : this.trimDescription(this.props.description);
        let public_id = sessionStorage.getItem('public_id');
        let whatToShow = (<BaseTagStatus className="issue-tag" status={this.props.tag}/>);
        if(this.props.tag === 'open' && public_id[0] === 'c'){
            // input field
            whatToShow = (
            <div className="glb-base-input-component glb-flex-center">
                <label>Propose a sum:</label>
                <BaseInputText type="text" valueUpdated={price => this.setState({price: parseInt(price)})} />
            </div>)
        }

        return (
            <article>
                <article className="issue-card glb-base-container">
                    <article className="issue-card-left">
                        <label className="issue-posted">
                            <span className="issue-posted-text">Posted:</span>
                            <span className="issue-posted-date">{this.props.postedDate}</span>
                        </label>
                        <span className="issue-title">{this.props.title}</span>
                        <span className="issue-description">{description}</span>
                        {this.description_length > MAX_COUNT && 
                        <span className="issue-expand" onClick={this.state.isExpanded ? this.hide_issue : this.expand_issue}>{this.state.isExpanded ? "Hide" : "Expand.."}</span>}
                    </article>
                    
                    <article className="issue-card-right">
                        {whatToShow}
                        <button className="issue-button glb-base-outlined-button" onClick={this.buttonClickHandler}>{this.props.button}</button>
                    </article>
                </article>
                {this.state.applicantsComponent}
            </article>
        );
    }
}

export default BaseIssueCard;