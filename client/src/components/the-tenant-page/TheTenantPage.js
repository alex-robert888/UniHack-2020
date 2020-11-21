import './TheTenantPage.scss';

const TheTenantPage = () => {


    return (
        <section className='the-landlord-page' class="glb-page">
            <h1>{localStorage.getItem("fullname")}</h1>
        </section>
    );
}

export default TheTenantPage;