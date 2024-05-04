import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import BannerAdd from '../BannerAdd/BannerAdd';
import Footer from '../Footer/Footer';
import BannerVbr from '../BannerVbr/BannerVbr';
import Historic from '../Historic/Historic';
import Evenements from '../Evenements/Evenements';
import Adds from '../Adds/Adds';

import './App.scss';
import Results from '../Results/Results';
import AddsDetails from '../AddsDetails/AddsDetails';
import Teams from '../Teams/Teams';
import TeamsDetails from '../TeamsDetails/TeamsDetails';
import LifeStyle from '../LifeStyle/LifeStyle';
import useScrollTo from '../useScrollTo/useScrollTo';

function App(): JSX.Element {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
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
          <Route path="/evenements/:game" element={<Results />} />
          <Route path="/sponsors" element={<Adds />} />
          <Route path="/sponsors/:add" element={<AddsDetails />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:pole" element={<TeamsDetails />} />
          <Route path="/life-style" element={<LifeStyle />} />
        </Routes>
      </div>
      <BannerAdd isUp={false} />
      <Footer />
    </div>
  );
}

export default App;
