import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';

import './App.scss';
import Home from '../Home/Home';
import BannerAdd from '../BannerAdd/BannerAdd';
import Footer from '../Footer/Footer';
import BannerVbr from '../BannerVbr/BannerVbr';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerAdd />
      <BannerVbr />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <BannerAdd />
      <Footer />
    </div>
  );
}

export default App;
