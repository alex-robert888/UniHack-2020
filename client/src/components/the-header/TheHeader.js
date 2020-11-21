import './TheHeader.scss';
import '../../style/classes.scss';
import logo from '../../assets/img/logo.svg';
import TheHeaderSection from './TheHeaderSection';
import TheHeaderSectionLogged from './TheHeaderSectionLogged';
import { useHistory } from 'react-router-dom';
import { React, useState } from 'react'; 

const TheHeader = ({isLogged, type}) => { // isLogged, type (tenant,landlord,contractor)

    let [history, setHistory] = useState(useHistory());

    const goToHome = () => {
        let public_id = sessionStorage.getItem('public_id');
        if(public_id === null){
            history.push("/");
        }else{
            if(public_id[0] === 't'){
                history.push("/tenant");
            }else if(public_id[0] === 'l'){
                history.push("/landlord");
            }else if(public_id[0] === 'c'){
                history.push("/contractor");
            }
        }
    }

    return (
        <header className='the-header glb-page'>
            <img src={logo} alt="icon-logo" className="logo" onClick={goToHome}/>
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