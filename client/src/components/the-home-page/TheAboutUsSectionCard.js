import './TheAboutUsSectionCard.scss';
import Andrei from '../../assets/img/non-svg/andrei.jpg';
import Birli from '../../assets/img/non-svg/birli.jpg';
import Boli from '../../assets/img/non-svg/boli.jpg';
import Zsolt from '../../assets/img/non-svg/zsolt.jpg';
import GithubIcon from '../../assets/img/icons/github-icon.svg';
import LinkedinIcon from '../../assets/img/icons/linkedin-icon.svg';
import FacebookIcon from '../../assets/img/icons/facebook-icon.svg';
import '../../style/classes.scss';

const TheAboutUsSectionCard = ({img_name, name, short_desc, long_desc, github, linked_in, facebook}) => {
    let img = "";
    if(img_name === "Andrei"){
        img = Andrei;
    }else if(img_name === "Birli"){
        img = Birli;
    }else if(img_name === "Boli"){
        img = Boli;
    }else if(img_name === "Zsolt"){
        img = Zsolt;
    }

    return (
        <section className="main-section glb-base-container-smaller">
            <section className="top-section">
                <img className="top-img" src={img} alt="about-us-icon"/>
                <section className="top-right-section">
                    <label className="title">{name}</label>
                    <p className="short-desc">{short_desc}</p>
                    <section className="small-icons">
                        {github ? <a href={github} alt="github-logo"><img className="small-icon" src={GithubIcon} alt="github-icon"/></a> : ""}
                        {linked_in ? <a href={linked_in} alt="linkedin-logo"><img className="small-icon" src={LinkedinIcon} alt="linkedin-icon"/></a> : ""}
                        {facebook ? <a href={facebook} alt="facebook-logo"><img className="small-icon" src={FacebookIcon} alt="facebook-icon"/></a> : ""}
                    </section>
                </section>
            </section>
            <section className="bottom-section">
                <p className="long-desc">"{long_desc}"</p>
            </section>
        </section>
    );
}

export default TheAboutUsSectionCard;