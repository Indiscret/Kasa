import '../../styles/carousel.css';
import '../../styles/lodgings.css'
import { lodgingsList } from '../../datas/lodgings';
import { Navigate, useParams } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/aboutDropdown';
import Carousel from '../../components/Carousel/carousel';
import EmptyStar from "../../assets/Rating_Empty.png";
import FullStar from "../../assets/Rating_Full.png";

function Lodgings() {
    const { id } = useParams();
    const indexLodgings = lodgingsList.find((lodgings) => lodgings.id === id);
    if (!indexLodgings) {
      return <Navigate replace to="/*"/>
    }
    const range = [1, 2, 3, 4, 5];

      return (
      <main className="content">
        <section>
          <Carousel pictures={indexLodgings.pictures} />
        </section>
        <section >
          <div className='Lodgings'>
            <div className="Lodgings_contain"> 
              <h1 className='Lodgings_title'>{indexLodgings.title}</h1>
              <h2 className='Lodgings_location'>{indexLodgings.location}</h2>
              <ul className='Lodgings_location_tags'>
                {indexLodgings.tags.map((tags, index) => (
                    <li className="Lodgings_tag" key={`${index}-${tags}`}>{tags}</li>
                  ))}
              </ul>
            </div>
  
            <div className='host_contain'>
              <div className='host'>
                <ul className='host_list'>
                  <li className='host_name'>{indexLodgings.host.name}</li>
                  <li><img src={indexLodgings.host.picture} alt="Portait de l'host" className='host_img' /></li>
                </ul>
              </div>
               <div className='rating'>{range.map((rangeElement) =>
                indexLodgings.rating >= rangeElement ? <span key={rangeElement.toString()}> <img src={FullStar} alt='' className='rating_star' /></span> : <span key={rangeElement.toString()}><img src={EmptyStar} alt='' className='rating_star' /></span>
              )}
              </div>
            </div>
          </div>
          <div className='Dropdown_lodgings'>
              <Dropdown className="Dropdown_lodgings_description" title="Description" content={indexLodgings.description}/>
              <Dropdown className="Dropdown_lodgings_equipement" title="Équipements" content={indexLodgings.equipments.map ((equipment, index) => {
            return (
              <li className='Dropdown_equipement' key={index+id}>
                {equipment}
              </li>
            )})} />
          </div>
        </section>
      </main>
    )}

export default Lodgings;