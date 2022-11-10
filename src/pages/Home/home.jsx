import Banner from '../../components/Banner/banner';
import Card from '../../components/Card/card';
import '../../styles/home.css';

function Home() {
    return (
        <div className='home_div'>
            <Banner/>
            <div className='card_div'>
                <Card/>
            </div>
        </div>
    )
}

export default Home