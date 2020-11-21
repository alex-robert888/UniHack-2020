import './TheHeaderSectionLogged.scss';
import '../../style/classes.scss';
import LogOut from '../user-page/LogOut';
import TheHeaderProfileSection from './TheHeaderProfileSection';
import BaseNotificationButton from '../base/BaseNotificationButton';


const TheHeaderSectionLogged = (props) => { // props.type: tenant,landlord or contractor
    const public_id = sessionStorage.getItem('public_id');
    return (
        <section>
            <nav className="">
                {props.type === "tenant" && (
                    <div className="the-header-options">
                        <BaseNotificationButton />
                        <TheHeaderProfileSection />
                        <label className="the-header-public-id">({public_id})</label>
                        <LogOut />
                    </div>
                )}
                {props.type === "landlord" && (
                    <div className="the-header-options">
                        <a href="/landlord/address" className="anchor" onClick={() => {}}>New address</a>
                        <TheHeaderProfileSection />
                        <label className="the-header-public-id">({public_id})</label>
                        <LogOut />
                    </div>
                )}
                {props.type === "contractor" && (
                    <div className="the-header-options">
                        <TheHeaderProfileSection />
                        <label className="the-header-public-id">({public_id})</label>
                        <LogOut />
                    </div>
                )}
                
            </nav>
        </section>
    );
}

export default TheHeaderSectionLogged;