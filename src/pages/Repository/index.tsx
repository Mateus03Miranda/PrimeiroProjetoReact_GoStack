import React from 'react';
// import { useRouteMatch } from 'react-router-dom';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Header, Section, List } from './style';

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
          <BsChevronLeft className="LeftArrow" />
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

      <List>
        <section>
          <p>gostack-desafio-conceitos-react-native</p>
          <span>Mateus Miranda</span>
        </section>
        <BsChevronRight className="RightArrow" />
      </List>
      <List>
        <section>
          <p>gostack-desafio-conceitos-react-native</p>
          <span>Mateus Miranda</span>
        </section>
        <BsChevronRight className="RightArrow" />
      </List>
    </>
  );
};

export default Repository;
