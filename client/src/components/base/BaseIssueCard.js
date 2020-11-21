import React, {Component} from 'react';
import './BaseIssueCard.scss';
import '../../style/classes.scss';
import BaseTagStatus from './BaseTagStatus';
import axios from 'axios';
import BaseInputText from './BaseInputText';

const MAX_COUNT = 150; // take caution: issue-cards are going to be small

class BaseIssueCard extends Component{ // postedDate, title, description, tag, button
    constructor(props){
        super(props);
        this.state = {
            isExpanded: false
        }
        this.description_length = this.props.description.length;
    }

    expand_issue = () => {
        this.setState({isExpanded: true});
        console.log('expand');
    }
    
    hide_issue = () => {
        this.setState({isExpanded: false});
        console.log('hide');
    }

    trimDescription = (description) => {
        return description.substring(0,MAX_COUNT-3).trim() + "...";
    }

    changeStatusOfIssue = newStatus => { // no await
        axios.post('http://localhost:5000/routes/issues/propose/')
        let proposedPrice = 10;
        const tenant_id = "";
        const contractor_id = sessionStorage.getItem('public_id');
        let loginData = axios.post(`http://localhost:5000/routes/issues/propose/${tenant_id}`, {
            contractor_pid: contractor_id,
            price: proposedPrice
            })
    }

    buttonClickHandler = () => {
        if(this.props.tag === "open"){       
            this.changeStatusOfIssue("pending");
            // change status of issue to pending
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
        if(!public_id){
            alert('BAD GATEWAY');
        }
        let whatToShow = (<BaseTagStatus className="issue-tag" status={this.props.tag}/>);
        if(this.props.tag === 'open' && public_id[0] === 'c'){
            // input field
            whatToShow = (
            <div className="glb-base-input-component glb-flex-center">
                <label>Propose a sum:</label>
                <BaseInputText />
            </div>)
        }

        return (
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
        );
    }
}

export default BaseIssueCard;