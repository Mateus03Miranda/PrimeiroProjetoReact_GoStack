import React, { useState, FormEvent, useEffect } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import {
  Title,
  Logo,
  Form,
  Input,
  Button,
  Ul,
  Li,
  AvatarImg,
  DivName,
  Name,
  Description,
  Arrow,
  Error,
} from './style';
import LogoImg from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [NewRepo, setNewRepo] = useState('');
  const [repositories, setReposities] = useState<Repository[]>(() => {
    const storageRepository = localStorage.getItem('@GitHubExplorer');
    if (storageRepository) return JSON.parse(storageRepository);
    return [];
  });
  const [inputError, setInputError] = useState('');
  useEffect(() => {
    localStorage.setItem('@GitHubExplorer', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!NewRepo) {
      setInputError('Digite o autor/nome do repositório!');
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${NewRepo}`);
      const repository = response.data;
      setReposities([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError(
        `Erro na busca pelo autor/repositório, verifique se está escrito corretamente!`,
      );
    }
  }
  return (
    <>
      <Logo src={LogoImg} />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <Input
          hasError={Boolean(inputError)}
          placeholder="Digite Aqui!"
          value={NewRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <Button>Pesquisar</Button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Ul>
        {repositories.map(repository => (
          <Li key={repository.full_name}>
            <AvatarImg
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <DivName>
              <Name>{repository.full_name}</Name>
              <Description>{repository.description}</Description>
            </DivName>
            <Link className="Link" to={`repository/${repository.full_name}`}>
              <BsChevronRight className={Arrow} />
            </Link>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default Dashboard;
