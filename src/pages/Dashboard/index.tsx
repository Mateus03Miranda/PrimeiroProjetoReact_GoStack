import React, { useState, FormEvent } from 'react';
import { BsChevronRight } from 'react-icons/bs';
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
  const [repositories, setReposities] = useState<Repository[]>([]);
  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await api.get<Repository>(`repos/${NewRepo}`);
    const repository = response.data;
    setReposities([...repositories, repository]);
    setNewRepo('');
  }
  return (
    <>
      <Logo src={LogoImg} />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <Input
          placeholder="Digite Aqui!"
          value={NewRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <Button>Pesquisar</Button>
      </Form>
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
            <BsChevronRight className={Arrow} />
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default Dashboard;
