import PropTypes from "prop-types";
import { lodgingsList} from '../../datas/lodgings';
import '../../styles/card.css';

function Card() {
    return (
        <ul className="card_contain">
            {lodgingsList.map(({title, id, cover}) => (
                <li className="lodgings_card" key={id}>
                    <div className="lodgings_card_color"></div>
                    <h2 className="lodgings_card_title">{title}</h2>
                    <img className="lodgings_card_img" src={cover} alt={title} />
                </li>
            ))}
        </ul>
    )
}

Card.propTypes = {
    key: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default Card