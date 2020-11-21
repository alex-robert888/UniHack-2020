import './TheHeader.scss';
import '../../style/classes.scss';
import logo from '../../assets/img/logo.svg';
import TheHeaderSection from './TheHeaderSection';
import TheHeaderSectionLogged from './TheHeaderSectionLogged';

const TheHeader = () => { // (tenant,landlord,contractor)

    let isLogged = false;
    let local_id = localStorage.getItem('local_id');
    if(local_id){
        isLogged = true;
    }
    let type = "";
    if(local_id === ""){
        if(local_id[0] === 't'){
            type = 'tenant';
        }else if(local_id[0] === 'l'){
            type = 'landlord';
        }else if(local_id[0] === 'c'){
            type = 'contractor';
        }
    }

    return (
        <header className='the-header glb-page'>
            <img src={logo} alt="" className="logo" />
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