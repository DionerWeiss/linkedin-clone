import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover" />
        <img
          src="https://github.com/dionerweiss.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Dioner Weiss</h1>
        <h2>Developer at @ Qualitor Software</h2>

        <div className="separator" />

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
