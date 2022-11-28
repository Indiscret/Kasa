import '../../styles/AboutDropdown.css';
import { useState } from 'react';
import IconDropdown from '../../assets/Icon_Dropdown.png';

function AboutDropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    return isOpen ? (
        <div className='Dropdown'>
            <button className='Dropdown_btn' onClick={() => setIsOpen(false)}>
                {title}
                <img className='Dropdown_img_Open' src={IconDropdown} alt='Icon_Arrow'/>
            </button>
            <p className='Dropdown_content'>{content}</p>
        </div>
    ) : (
        <div className='Dropdown'>
            <button className='Dropdown_btn' onClick={() => setIsOpen(true)}>
                {title}
                <img className='Dropdown_img' src={IconDropdown} alt='Icon_Arrow'/>
            </button>
        </div>
    )
}

export default AboutDropdown