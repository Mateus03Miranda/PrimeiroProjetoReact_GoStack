import React from 'react';
// import { useRouteMatch } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { Header, Section } from './style';

import Logo from '../../assets/logo.svg';
import profile from '../../assets/Profile.jpg';

interface Repository {
  repository: string;
}

const Repository: React.FC = () => {
  // const { params } = useRouteMatch<Repository>();
  return (
    <>
      <Header>
        <img src={Logo} alt="Github Explorer Logo" />
        <div className="back">
          <BsChevronLeft className="Arrow" />
          <span>Voltar</span>
        </div>
      </Header>
      <Section>
        <div className="avatar">
          <img src={profile} alt="Mateus Miranda" />
          <div className="profile">
            <span className="name">Mateus Miranda</span>
            <span className="description">Descrição do Repo</span>
          </div>
        </div>
        <div className="repoStatistics">
          <div className="Statistics">
            <p>2</p>
            <span>Stars</span>
          </div>
          <div className="Statistics">
            <p>72</p>
            <span>Forks</span>
          </div>
          <div className="Statistics">
            <p>2</p>
            <span>Issues Abertas</span>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Repository;
