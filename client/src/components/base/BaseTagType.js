import './BaseInputRadioButtons.scss';
import '../../style/classes.scss';

import './BaseTagType.scss';

const BaseTagType = (props) => { // props.tag
    // <BaseTagType tag="Tenant"></BaseTagType>
    var tag_class = "";
    if(props.tag === 'Tenant'){
        tag_class = 'tenant_tag';
    }
    else if(props.tag === 'Landlord'){
        tag_class = 'landlord_tag';
    }else{
        tag_class = 'contractor_tag'; // default case
    }
    tag_class += " tag";

    return (
        <article>
            <label className={tag_class}>
                {props.tag}
            </label>
        </article>
    );
}

export default BaseTagType;