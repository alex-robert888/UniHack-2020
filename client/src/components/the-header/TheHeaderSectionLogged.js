import './TheHeaderSectionLogged.scss';
import '../../style/classes.scss';

const TheHeaderSectionLogged = (props) => { // props.type: tenant,landlord or contractor
    return (
        <section>
            <nav className="">
                {props.type === "tenant" && (
                    <a href="#log_out" className="anchor  glb-base-outlined-button glb-rounded-corners">Log out</a>
                )}
                {props.type === "landlord" && (
                    <div>
                        <a href="#new_address" className="anchor" onClick={() => {}}>New address</a>
                        <a href="#log_out" className="anchor  glb-base-outlined-button glb-rounded-corners">Log out</a>
                    </div>
                )}
                {props.type === "contractor" && (
                    <a href="#log_out" className="anchor  glb-base-outlined-button glb-rounded-corners">Log out</a>
                )}
                
            </nav>
        </section>
    );
}

export default TheHeaderSectionLogged;