import Logo from '../../assets/Logo_light.png';
import '../../styles/footer.css';

function Footer() {
    return (
        <footer className='Footer'>
            <img className='Footer_logo' src={Logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer