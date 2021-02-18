import { FC } from 'react';

import CustomLink from './common/Link';
import HeaderMenu from './HeaderMenu';

const Header : FC = () => (
  <header className="header" id="header">
    <div className="header__logo">
      <CustomLink href="/#">
        <img src="/img/logo-mapeo.svg" alt="Logo mapeo" width="92" />
      </CustomLink>
    </div>
    <HeaderMenu />
    {/* <div id="headerMenuIcon" className="header header__menu-icon">
      <i>
        <FontAwesomeIcon icon={faBars} />
      </i>
    </div>
    <div id="headerNavigation" className="navigation">
      <ul className="navigation__list">
        <div id="closeMenuNav" className="header__menu-close">
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <HeaderNavLink
          tags={['nosotros']}
          id="navItem2"
          className="navigation__item navigation__item--orange"
          activeClassName="navigation__item--active"
        >
          <CustomLink href="/#nosotros">Nosotros</CustomLink>
        </HeaderNavLink>
        <div className="navigation__dropdown">
          <HeaderNavLink
            tags={['soluciones', 'marketing', 'personas']}
            id="navItem2"
            className="navigation__item navigation__item--purple"
            activeClassName="navigation__item--active"
          >
            Soluciones
            {'  '}
            <FontAwesomeIcon icon={faChevronDown} />
          </HeaderNavLink>
          <ul className="navigation__dropdown-list">
            <li className="navigation__dropdown-item">
              <CustomLink href="/#marketing">Marketing</CustomLink>
            </li>
            <li className="navigation__dropdown-item">
              <CustomLink href="/#personas">Personas</CustomLink>
            </li>
          </ul>
        </div>
        <HeaderNavLink
          tags={['portafolio']}
          id="navItem3"
          className="navigation__item navigation__item--skyblue"
          activeClassName="navigation__item--active"
        >
          <CustomLink href="/portafolio">Portafolio</CustomLink>
        </HeaderNavLink>
        <HeaderNavLink
          tags={['blog']}
          id="navItem4"
          className="navigation__item navigation__item--yellow"
          activeClassName="navigation__item--active"
        >
          <CustomLink href="/blog">Blog</CustomLink>
        </HeaderNavLink>
        <HeaderNavLink
          tags={['tu-primer-mapeo']}
          id="navItem5"
          className="navigation__item navigation__item--violet"
          activeClassName="navigation__item--active"
        >
          <CustomLink href="/#primer-mapeo">Tu primer Mapeo</CustomLink>
        </HeaderNavLink>
      </ul>
    </div>
   */}
  </header>
);

export default Header;
