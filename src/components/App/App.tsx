import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import BannerAdd from '../BannerAdd/BannerAdd';
import Footer from '../Footer/Footer';
import BannerVbr from '../BannerVbr/BannerVbr';
import Historic from '../Historic/Historic';
import Evenements from '../Evenements/Evenements';

import './App.scss';
import Adds from '../Adds/Adds';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <BannerAdd isUp />
      <BannerVbr />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historique" element={<Historic />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/sponsors" element={<Adds />} />
        </Routes>
      </div>
      <BannerAdd isUp={false} />
      <Footer />
    </div>
  );
}

export default App;
