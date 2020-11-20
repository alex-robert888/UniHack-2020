import './TheHeader.scss';
import '../../style/classes.scss';
import logo from '../../assets/img/logo.svg';

const TheHeader = () => {
    return (
        <header className='the-header glb-page'>
            <img src={logo} alt="" className="logo" />
        </header>
    );
}

export default TheHeader;