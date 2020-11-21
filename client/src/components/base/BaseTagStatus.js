import './BaseTagStatus.scss';

const BaseTagStatus = (props) => { // "Open Pending Solved"
    const status_name = props.status.toLowerCase();
    return (
        <article className={"tag-box tag-box-" + status_name}>
            <span className={"tag-text tag-" + status_name}>{props.status}</span>
        </article>
    );
}

export default BaseTagStatus;