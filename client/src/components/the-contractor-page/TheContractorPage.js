import './TheContractorPage.scss';
import TheHeader from '../the-header/TheHeader'

const TheContractorPage = () => {
    return (
        <div>
            <TheHeader />
            <div className='the-contractor-page' class="glb-page">
                <h1>{localStorage.getItem('fullname')}</h1>
            </div>
        </div>
    );
}

export default TheContractorPage;