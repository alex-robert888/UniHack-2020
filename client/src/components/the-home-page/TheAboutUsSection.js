import './TheAboutUsSection.scss';
import TheAboutUsSectionCard from './TheAboutUsSectionCard';
import '../../style/classes.scss';

const TheAboutUsSection = () => {
    return (
        <section className="about-us-section">
            <section className="about-us-title">
                <span>ABOUT US</span>
            </section>
            <section className="about-us-cards">
                <TheAboutUsSectionCard 
                    img_name="Boli"
                    name="Negrea Balazs"
                    short_desc="Video editing & Front-end"
                    long_desc="An interesting project with a huge impact on our society.Just make it simple, with us."
                    github="https://github.com/nbalazs1337"
                    linked_in="https://www.linkedin.com/in/balazs-florin-negrea-398656197"
                    facebook="https://www.facebook.com/negrea.balazs"
                />
                <TheAboutUsSectionCard 
                    img_name="Birli"
                    name="Bîrligă Robert"
                    short_desc="Fullstack & UI / UX"
                    long_desc="I beleive 100% in the applicability of this project's idea in the real world. Can't wait to launch it."
                    github="https://github.com/skoda888"
                    linked_in="https://www.linkedin.com/in/birliga-robert-5a6a52162/"
                    facebook="https://www.facebook.com/profile.php?id=100010587526029"
                />
                <TheAboutUsSectionCard 
                    img_name="Andrei"
                    name="Alexandrescu Andrei"
                    short_desc="Fullstack"
                    long_desc="Contributing to a project with such a great potential has never been so exciting before."
                    github="https://github.com/PerlMonker303"
                    linked_in="https://www.linkedin.com/in/andrei-robert-alexandrescu-189aa7192/"
                    facebook="https://www.facebook.com/AlexandrescuAndreiRobert3/"
                />
                <TheAboutUsSectionCard 
                    img_name="Zsolt"
                    name="Birta Zsolt"
                    short_desc="Backend"
                    long_desc="'Cowards die many times before their deaths; the valiant never taste of death but once.' - William Shakespeare"
                    github="https://github.com/Bizso96"
                    linked_in="https://www.linkedin.com/in/birta-zsolt-2bb45582/"
                    facebook="https://www.facebook.com/birta.zsolt"
                />
            </section>
        </section>
    );
}

export default TheAboutUsSection;