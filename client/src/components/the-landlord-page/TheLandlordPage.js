import './TheLandlordPage.scss';

const TheLandlordPage = () => {
    return (
        <div className='the-landlord-page' class="glb-page">
            <h1>{localStorage.getItem('fullname')}</h1>
        </div>
    );
}

export default TheLandlordPage;