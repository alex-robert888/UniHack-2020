import './TheHeaderSectionLogged.scss';
import '../../style/classes.scss';
import LogOut from '../user-page/LogOut';

const TheHeaderSectionLogged = (props) => { // props.type: tenant,landlord or contractor
    return (
        <section>
            <nav className="">
                {props.type === "tenant" && (
                    <LogOut />
                )}
                {props.type === "landlord" && (
                    <div>
                        <a href="#new_address" className="anchor" onClick={() => {}}>New address</a>
                        <LogOut />
                    </div>
                )}
                {props.type === "contractor" && (
                    <LogOut />
                )}
                
            </nav>
        </section>
    );
}

export default TheHeaderSectionLogged;