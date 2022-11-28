import '../../styles/Carousel.css';
import LeftArrow from  '../../assets/Arrow_Left.png';
import RightArrow from  '../../assets/Arrow_Right.png';
import { useState } from 'react';

function Carousel(slides) {
    const [current, setCurrent] = useState(0);
    const length = slides.pictures.length;

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const previous = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    return (
        <div className='Carousel'>
          {length > 1 && (<div onClick={previous}><img src={LeftArrow} alt='flèche vers la gauche' className="Left_Arrow" /></div>)}
          {length > 1 && (<div onClick={next}><img src={RightArrow} alt='flèche vers la droite' className="Right_Arrow" /></div>)}
          <p className="Carousel_p">{current + 1}/{slides.pictures.length}</p>
          {slides.pictures.map((image, index) => {
            return (
              <figure className="Lodging_slide" key={index}>
                {index === current && (<img src={image} alt="Exemple du logement" className='carousel_img' />)}
              </figure>
            )
          })}
        </div>
    )
}

export default Carousel