import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Header, Section, List } from './style';
import api from '../../services/api';
import Logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });
    api.get(`repos/${params.repository}/issues`).then(response => {
      // console.log(response.data);
      setIssues(response.data);
    });
  }, [params.repository]);
  return (
    <>
      <Header>
        <img src={Logo} alt="Github Explorer Logo" />
        <Link to="/">
          <BsChevronLeft className="LeftArrow" />
          <span>Voltar</span>
        </Link>
      </Header>

      {repository && (
        <Section>
          <div className="avatar">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div className="profile">
              <span className="name">{repository.full_name}</span>
              <span className="description">{repository.description}</span>
            </div>
          </div>
          <div className="repoStatistics">
            <div className="Statistics">
              <p>{repository.stargazers_count}</p>
              <span>Stars</span>
            </div>
            <div className="Statistics">
              <p>{repository.forks_count}</p>
              <span>Forks</span>
            </div>
            <div className="Statistics">
              <p>{repository.open_issues_count}</p>
              <span>Issues Abertas</span>
            </div>
          </div>
        </Section>
      )}
      {issues.map(issue => (
        <List key={issue.id} href={issue.html_url}>
          <section>
            <p>{issue.title}</p>
            <span>{issue.user.login}</span>
          </section>
          <BsChevronRight className="RightArrow" />
        </List>
      ))}
    </>
  );
};

export default Repository;
