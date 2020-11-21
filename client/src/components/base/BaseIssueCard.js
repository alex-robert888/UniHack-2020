import React, {Component} from 'react';
import './BaseIssueCard.scss';
import '../../style/classes.scss';
import BaseTagStatus from './BaseTagStatus';

const MAX_COUNT = 150; // take caution: issue-cards are going to be small

 // ### WORK IN PROGRESS ###
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


    render(){
        let description = this.state.isExpanded ? this.props.description : this.trimDescription(this.props.description);
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
                        <BaseTagStatus className="issue-tag" status={this.props.tag}/>
                        <button className="issue-button glb-base-outlined-button">{this.props.button}</button>
                    </article>
            </article>
        );
    }
}

export default BaseIssueCard;