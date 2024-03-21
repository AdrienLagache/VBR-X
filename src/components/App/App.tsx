import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import BannerAdd from '../BannerAdd/BannerAdd';
import Footer from '../Footer/Footer';
import BannerVbr from '../BannerVbr/BannerVbr';

import './App.scss';

function App(): JSX.Element {
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
