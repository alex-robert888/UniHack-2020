import './TheContractorPage.scss';
import TheHeader from '../the-header/TheHeader'
import TheContractorOpenIssues from './TheContractorOpenIssues';
import BaseIssueHistory from '../base/BaseIssueHistory';

const TheContractorPage = () => {

    const listIssues = [];

    return (
        <div>
            <TheHeader isLogged={true} type="contractor"/>
            <section className='glb-page main-contractor'>
                <div className="main-contractor-forms">
                    <div className='left-section'>
                        <BaseIssueHistory 
                            listIssues={listIssues}
                        />
                    </div>

                    <div className='right-section'>
                        <TheContractorOpenIssues />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TheContractorPage;