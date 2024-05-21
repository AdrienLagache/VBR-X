import MediaQuery from 'react-responsive';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

function Header(): JSX.Element {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [secVisible, setSecVisible] = useState(false);
  const [path, setPath] = useState(window.location.pathname);
  const pathDependancy = window.location.pathname;
  let toPath = path;

  if (path.startsWith('/evenements')) {
    toPath = '/evenements';
  } else if (path.startsWith('/sponsors')) {
    toPath = '/sponsors';
  } else if (path.startsWith('/teams')) {
    toPath = '/teams';
  }

  useEffect(() => {
    setPath(window.location.pathname);
  }, [pathDependancy]);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;
      setVisible(position > moving || moving < 100);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    const handleMainMenu = () => {
      setSecVisible((prevSecVisible) => !prevSecVisible);
    };

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target && secVisible && !target.closest('#menu')) {
        setSecVisible(false);
      }
    };

    const menuIcon = document.querySelector('#menu');
    menuIcon?.addEventListener('click', handleMainMenu);

    window.addEventListener('click', handleOutsideClick);

    return () => {
      menuIcon?.removeEventListener('click', handleMainMenu);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [secVisible]);

  return (
    <div className={`header header--${visible ? 'visible' : 'hidden'}`}>
      <div className="main-header">
        <NavLink
          to="/"
          onClick={() => {
            setPath('/');
          }}
        >
          <img
            className="header-logo"
            src="/assets/images/logos/vbr-icon.png"
            alt="Le logo de la Virtual Best Racing"
          />
        </NavLink>
        <div className="main-header_page">
          <NavLink
            to={toPath}
            className={({ isActive }) => {
              return isActive
                ? 'main-header_link main-header_link--active'
                : 'main-header_link';
            }}
          >
            <p>
              {path === '/' ? 'Accueil' : ''}
              <MediaQuery maxWidth={599}>
                {path === '/historique' ? 'À propos' : ''}
              </MediaQuery>
              {path.startsWith('/evenements') ? 'Évènements' : ''}
              <MediaQuery maxWidth={599}>
                {path.startsWith('/sponsors') ? 'Sponsors' : ''}
              </MediaQuery>
              <MediaQuery maxWidth={1199}>
                {path.startsWith('/teams') ? 'Nos teams' : ''}
              </MediaQuery>
              {path === '/life-style' ? 'Lifestyle' : ''}
              {path === '/legends' ? 'Legends drivers' : ''}
            </p>
          </NavLink>
        </div>
        <MediaQuery maxWidth={599}>
          <nav className="main-header_div">
            <ul className="main-header_list">
              <li className="main-header_link" id="menu">
                Menu
              </li>
            </ul>
          </nav>
        </MediaQuery>
        <MediaQuery minWidth={600} maxWidth={999}>
          <nav className="main-header_div">
            <ul className="main-header_list">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link main-header_link--active'
                    : 'main-header_link';
                }}
                to="/historique"
                onClick={() => {
                  setPath('/accueil');
                }}
              >
                <li>À propos</li>
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/sponsors"
                onClick={() => {
                  setPath('/sponsors');
                }}
              >
                <li>Sponsors</li>
              </NavLink>

              <li className="main-header_link" id="menu">
                plus
              </li>
            </ul>
          </nav>
        </MediaQuery>
        {/* <MediaQuery minWidth={900} maxWidth={1199}>
          <nav className="main-header_div">
            <ul className="main-header_list">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/historique"
                onClick={() => {
                  setPath('/historique');
                }}
              >
                <li>À propos</li>
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/sponsors"
                onClick={() => {
                  setPath('/sponsors');
                }}
              >
                <li>Sponsors</li>
              </NavLink>

              <li className="main-header_link" id="menu">
                plus
              </li>
            </ul>
          </nav>
        </MediaQuery> */}
        <MediaQuery minWidth={1000} maxWidth={1200}>
          <nav className="main-header_div">
            <ul className="main-header_list">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/historique"
                onClick={() => {
                  setPath('/historique');
                }}
              >
                <li>À propos</li>
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/sponsors"
                onClick={() => {
                  setPath('/sponsors');
                }}
              >
                <li>Sponsors</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/teams"
                onClick={() => {
                  setPath('/teams');
                }}
              >
                <li>Nos teams VBR</li>
              </NavLink>

              <li className="main-header_link" id="menu">
                plus
              </li>
            </ul>
          </nav>
        </MediaQuery>
        <MediaQuery minWidth={1200} maxWidth={1400}>
          <nav className="main-header_div">
            <ul className="main-header_list">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/historique"
                onClick={() => {
                  setPath('/historique');
                }}
              >
                <li>À propos</li>
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/sponsors"
                onClick={() => {
                  setPath('/sponsors');
                }}
              >
                <li>Sponsors</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/teams"
                onClick={() => {
                  setPath('/teams');
                }}
              >
                <li>Nos teams VBR</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/evenements"
                onClick={() => {
                  setPath('/evenements');
                }}
              >
                <li>Évènements</li>
              </NavLink>
              <li className="main-header_link" id="menu">
                plus
              </li>
            </ul>
          </nav>
        </MediaQuery>
        <MediaQuery minWidth={1400} maxWidth={1600}>
          <nav className="main-header_div">
            <ul className="main-header_list">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/historique"
                onClick={() => {
                  setPath('/historique');
                }}
              >
                <li>À propos</li>
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/sponsors"
                onClick={() => {
                  setPath('/sponsors');
                }}
              >
                <li>Sponsors</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/teams"
                onClick={() => {
                  setPath('/teams');
                }}
              >
                <li>Nos teams VBR</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/evenements"
                onClick={() => {
                  setPath('/evenements');
                }}
              >
                <li>Évènements</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/legends"
                onClick={() => {
                  setPath('/legends');
                }}
              >
                <li>Legends</li>
              </NavLink>
              <li className="main-header_link" id="menu">
                plus
              </li>
            </ul>
          </nav>
        </MediaQuery>
        <MediaQuery minWidth={1601} maxWidth={1800}>
          <nav className="main-header_div">
            <ul className="main-header_list">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/historique"
                onClick={() => {
                  setPath('/historique');
                }}
              >
                <li>À propos</li>
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/sponsors"
                onClick={() => {
                  setPath('/sponsors');
                }}
              >
                <li>Sponsors</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/teams"
                onClick={() => {
                  setPath('/teams');
                }}
              >
                <li>Nos teams VBR</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/evenements"
                onClick={() => {
                  setPath('/evenements');
                }}
              >
                <li>Évènements</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/legends"
                onClick={() => {
                  setPath('/legends');
                }}
              >
                <li>Legends</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/life-style"
                onClick={() => {
                  setPath('/life-style');
                }}
              >
                <li>Lifestyle</li>
              </NavLink>
            </ul>
          </nav>
        </MediaQuery>
        <MediaQuery minWidth={1801}>
          <nav className="main-header_div">
            <ul className="main-header_list">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/historique"
                onClick={() => {
                  setPath('/historique');
                }}
              >
                <li>À propos</li>
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/sponsors"
                onClick={() => {
                  setPath('/sponsors');
                }}
              >
                <li>Sponsors de l'association</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/teams"
                onClick={() => {
                  setPath('/teams');
                }}
              >
                <li>Nos teams VBR</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/evenements"
                onClick={() => {
                  setPath('/evenements');
                }}
              >
                <li>Évènements</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/legends"
                onClick={() => {
                  setPath('/legends');
                }}
              >
                <li>VBR Legends</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? 'main-header_link--active'
                    : 'main-header_link';
                }}
                to="/life-style"
                onClick={() => {
                  setPath('/life-style');
                }}
              >
                <li>Lifestyle</li>
              </NavLink>
            </ul>
          </nav>
        </MediaQuery>
      </div>
      <nav
        className={`secondary-header_nav${
          secVisible ? '--visible' : '--hidden'
        }`}
        id="secondary-header"
      >
        <ul className="secondary-header_list">
          <NavLink className="secondary-header_link" to="/">
            <li className="secondary-header_item">Accueil</li>
          </NavLink>
          <NavLink className="secondary-header_link" to="/historique">
            <li className="secondary-header_item">À propos</li>
          </NavLink>
          <NavLink className="secondary-header_link" to="/sponsors">
            <li className="secondary-header_item">
              Sponsors et partenaires de l&apos;association
            </li>
          </NavLink>
          <NavLink className="secondary-header_link" to="/teams">
            <li className="secondary-header_item">Nos teams VBR</li>
          </NavLink>
          <NavLink className="secondary-header_link" to="/evenements">
            <li className="secondary-header_item">Evènements</li>
          </NavLink>
          <NavLink className="secondary-header_link" to="/legends">
            <li className="secondary-header_item">VBR Legends drivers</li>
          </NavLink>
          <NavLink className="secondary-header_link" to="/life-style">
            <li className="secondary-header_item">Lifestyle VBR</li>
          </NavLink>
          {/* <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Yohan Rossel / Champion du monde WRC3
            </a>
          </li>
          <li className="secondary-header_item">
            <a className="secondary-header_link" href="*">
              Boutique en ligne
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
