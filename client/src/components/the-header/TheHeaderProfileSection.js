
import './TheHeaderProfileSection.scss';

import defaultProfilePicture from '../../assets/img/icons/default-profile-picture.svg'

const TheHeaderProfileSection = () => {
    return (
        <article className='the-header-profile-section'>
            <img src={defaultProfilePicture} alt="" className='profile-picture' />
            <span>{sessionStorage.getItem('fullname')}</span>
        </article>
    );
}

export default TheHeaderProfileSection;