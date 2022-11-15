import BannerHome from '../../components/Banner/bannerHome';
import Card from '../../components/Card/card';
import '../../styles/home.css';

function Home() {
    return (
        <div className='home_div'>
            <BannerHome/>
            <div className='card_div'>
                <Card/>
            </div>
        </div>
    )
}

export default Home