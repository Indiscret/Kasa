import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import '../../styles/Home.css';

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