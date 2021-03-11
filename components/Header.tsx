import Image from 'next/image';
import { FC } from 'react';

import CustomLink from './common/Link';
import HeaderMenu from './HeaderMenu';

const Header : FC = () => (
  <header className="header" id="header">
    <div className="header__logo">
      <CustomLink href="/#">
        <Image src="/img/logo-mapeo.svg" alt="Logo mapeo" width={72} height={72} />
      </CustomLink>
    </div>
    <HeaderMenu />
  </header>
);

export default Header;
