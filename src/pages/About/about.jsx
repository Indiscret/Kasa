import Banner from '../../components/Banner/Banner';
import AboutDropdown from "../../components/Dropdown/Dropdown";
import { accordion } from '../../datas/Accordion';

function About () {
    return (
    <div>
        <Banner/>
        <div className="Dropdown">
            {accordion.map (({title, content}) => (
                <AboutDropdown title={title} content={content} />
            ))}
        </div>
    </div>)
}

export default About