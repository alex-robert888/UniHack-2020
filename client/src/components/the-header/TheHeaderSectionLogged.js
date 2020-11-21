import './TheHeaderSectionLogged.scss';
import '../../style/classes.scss';
import LogOut from '../user-page/LogOut';
import TheHeaderProfileSection from './TheHeaderProfileSection';


const TheHeaderSectionLogged = (props) => { // props.type: tenant,landlord or contractor
    return (
        <section>
            <nav className="">
                {props.type === "tenant" && (
                    <div className="the-header-options">
                        <TheHeaderProfileSection />
                        <LogOut />
                    </div>
                )}
                {props.type === "landlord" && (
                    <div className="the-header-options">
                        <a href="#new_address" className="anchor" onClick={() => {}}>New address</a>
                        <TheHeaderProfileSection />
                        <LogOut />
                    </div>
                )}
                {props.type === "contractor" && (
                    <div className="the-header-options">
                        <TheHeaderProfileSection />
                        <LogOut />
                    </div>
                )}
                
            </nav>
        </section>
    );
}

export default TheHeaderSectionLogged;