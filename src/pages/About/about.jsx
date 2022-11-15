import "../../styles/about.css";
import BannerAbout from '../../components/Banner/bannerAbout';
import AboutDropdown from "../../components/Dropdown/aboutDropdown";
import { accordion } from '../../datas/accordion';

function About () {
    return (
    <div>
        <BannerAbout/>
        <div className="Dropdown">
            {accordion.map (({title, content}) => (
                <AboutDropdown title={title} content={content} />
            ))}
        </div>
    </div>)
}

export default About