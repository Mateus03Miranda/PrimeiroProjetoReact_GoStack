import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
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
import Avatar from '../../assets/Profile.jpg';

const Dashboard: React.FC = () => (
  <>
    <Logo src={LogoImg} />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <Input placeholder="Digite Aqui!" />
      <Button>Pesquisar</Button>
    </Form>
    <Ul>
      <Li>
        <AvatarImg src={Avatar} />
        <DivName>
          <Name>Mateus03Miranda/repo</Name>
          <Description>Descrição do Repo</Description>
        </DivName>
        <BsChevronRight className={Arrow} />
      </Li>
      <Li>
        <AvatarImg src={Avatar} />
        <DivName>
          <Name>Mateus03Miranda/repo</Name>
          <Description>Descrição do Repo</Description>
        </DivName>
        <BsChevronRight className={Arrow} />
      </Li>
    </Ul>
  </>
);
export default Dashboard;
