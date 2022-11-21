import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/home';
import About from '../pages/About/about';
import Error from '../pages/Error/error';
import Lodgings from '../pages/Lodgings/lodgings';

function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/lodgings/*' element={<Error />} />
                <Route path='/lodgings/:id' element={<Lodgings/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/*' element={<Error/>} />
            </Routes>
        </div>
    )
}

export default Router