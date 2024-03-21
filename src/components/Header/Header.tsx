import { NavLink } from 'react-router-dom';
import './Header.scss';
import { useEffect, useState } from 'react';

function Header(): JSX.Element {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <div className={`header header--${visible ? 'visible' : 'hidden'}`}>
      <div className="main-header">
        <img
          className="header-logo"
          src="src/assets/images/logos/vbr-icon.png"
          alt=""
        />
        <nav className="main-header_nav">
          <li className="main-header_item">
            <NavLink to="/home">
              <p className="main-header_link main-header_link--active">
                Accueil
              </p>
            </NavLink>
          </li>
          <div className="main-header_div">
            <li className="main-header_item">
              <p className="main-header_link">Menu</p>
            </li>
            <li className="main-header_item">
              <p className="main-header_separation">&nbsp;|&nbsp;</p>
            </li>
            <li className="main-header_item">
              <NavLink to="*">
                <p className="main-header_link">Panier</p>
              </NavLink>
            </li>
          </div>
        </nav>
      </div>
      <nav className="secondary-header_nav">
        <ul className="secondary-header_list">
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Historique de l&apos;association
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Evènements
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Sponsors et partenaires de l&apos;association
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Lifestyle VBR
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Nos teams VBR
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              VBR Legends drivers
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Yohan Rossel / Champion du monde WRC3
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Boutique en ligne
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
