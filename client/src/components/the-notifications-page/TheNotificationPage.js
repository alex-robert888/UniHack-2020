import './TheNotificationPage.scss';
import '../../style/classes.scss';
import TheHeader from '../the-header/TheHeader'

const TheNotificationPage = () => {
    let isLogged = false;
    let type = "";
    let public_id = sessionStorage.getItem('public_id');
    if(public_id){
        isLogged = true;
        if(public_id[0] === 't'){
            type = 'tenant';
        }else if(public_id[0] === 'l'){
            type = 'landlord';
        }else if(public_id[0] === 'c'){
            type = 'contractor';
        }
    }
    return (
        <div>
            {isLogged ? (
                <div>
                    <TheHeader isLogged={true} type={type}/>
                    <div className="glb-page notifications-page">
                        <section className="glb-base-container notifications-section">
                            <span className="glb-h2">Notifications</span>
                        </section>
                    </div>
                </div>
            )
            :
            <span>Bad gateway</span>
            }
        </div>
    );
}

export default TheNotificationPage;