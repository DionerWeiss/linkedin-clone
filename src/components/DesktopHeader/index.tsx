import React from 'react';

import {
  Container,
  Wrapper,
  LinkedinIcon,
  SearchInput,
  HomeIcon,
  NotificationIcon,
  ProfileCircle,
  CaretDownIcon,
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active" type="button">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button type="button">
              <NotificationIcon />
              <span>Notificações</span>
            </button>
            <button type="button">
              <ProfileCircle src="https://github.com/dionerweiss.png" />
              <span>
                Eu
                <CaretDownIcon />
              </span>

            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;
