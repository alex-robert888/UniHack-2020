import {useState} from 'react';
import './TheHeader.scss';
import '../../style/classes.scss';
import logo from '../../assets/img/logo.svg';
import TheHeaderSection from './TheHeaderSection';
import TheHeaderSectionLogged from './TheHeaderSectionLogged';

const TheHeader = ({isLogged, type}) => { // isLogged, type (tenant,landlord,contractor)

    return (
        <header className='the-header glb-page'>
            <img src={logo} alt="icon-logo" className="logo" />
            <div className="header-section">
                { isLogged ?
                    <TheHeaderSectionLogged type={type}/>
                 :
                    <TheHeaderSection />
                }
            </div>
        </header>
    );
}

export default TheHeader;