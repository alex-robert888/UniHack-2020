import './TheHeaderSection.scss';
import '../../style/classes.scss';

const TheHeaderSection = () => {
    return (
        <section>
            <nav className="">
                <a href="/auth/login" className="anchor glb-base-filled-button glb-rounded-corners">My account</a>
                <a href="/" className="anchor">Home</a>
                <a href="#mission" className="anchor">Mission</a>
                <a href="#about_us" className="anchor">About us</a>
            </nav>
        </section>
    );
}

export default TheHeaderSection;