import './BaseTagStatus.scss';

const BaseTagStatus = (props) => { // ### WORK IN PROGRESS ###
    return (
        <article className={"tag-box"}>
            <span className={"tag-" + props.status.toLowerCase()}></span>
            {props.status}
        </article>
    );
}

export default BaseTagStatus;