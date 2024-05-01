import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import ControllScreen from './pages/controllscreen';
import HomeScreen from './pages/HomeScreen';
import Navbar from './companent/navbar';
import Bottombar from './companent/Bottombar';
import Aboutscreen from './pages/Aboutscreen';
import Contactscreen from './pages/Contactscreen';
import Searchscreen from './pages/Searchscreen';
import Readmorescreen from './pages/Readmorescreen';
import Categorycreen from './category/Categoryscreen';


function App() {

  return (

    <BrowserRouter>
        <div className="App">
    <Navbar />
    <div className='pages'>
      <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/About' element={<Aboutscreen />} />
      <Route path='/Search' element={<Searchscreen />} />
      <Route path='/Contact' element={<Contactscreen />} />
      <Route path='/:id' element={<Readmorescreen />} />
      <Route path='/controll' element={<ControllScreen />} />
      <Route path='/Space/:id' element={<Categorycreen />} />
      </Routes>
    </div>
    <Bottombar />
    </div>
    </BrowserRouter>

  );
}

export default App;
