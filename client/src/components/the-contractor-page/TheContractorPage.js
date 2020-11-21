import './TheContractorPage.scss';

const TheContractorPage = () => {
    return (
        <div className='the-contractor-page' class="glb-page">
            <h1>{localStorage.getItem('fullname')}</h1>
        </div>
    );
}

export default TheContractorPage;