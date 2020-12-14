import styled from 'styled-components';
import { style } from 'typestyle';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 450px;
`;

export const Logo = styled.img`
  height: 25px;
`;

export const Form = styled.form`
  display: flex;
  max-width: 710px;
  height: 70px;
  margin-top: 30px;
`;

export const Input = styled.input`
  width: 75%;
  border: none;
  border-radius: 10px;
  color: #a8a8b3;
  padding-left: 20px;
  transition: 0.6s;
  &:hover {
    border-radius: 0;
    padding-left: 10px;
  }
`;

export const Button = styled.button`
  width: 25%;
  font-size: 18px;
  color: #fff;
  background-color: #04d361;
  border: none;
  transition: 0.4s;
  &:hover {
    background-color: #04b553;
    border-radius: 10px;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  max-width: 710px;
  margin-top: 100px;
`;

export const Li = styled.li`
  margin-top: 16px;
  display: flex;
  padding: 14px 14px;
  background-color: #fff;
  border-radius: 10px;
  transition: 0.4s;
  &:hover {
    border-radius: 0;
    padding: 18px 18px;
  }
  &:hover > img {
    height: 85px;
    width: 85px;
  }
`;

export const AvatarImg = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  transition: 0.4s;
`;

export const DivName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  flex-grow: 1;
`;

export const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.span`
  font-size: 15px;
  color: #a8a8b3;
  margin-top: 4px;
`;

export const Arrow = style({
  height: '1.5em',
  width: '1.5em',
  color: '#C9C9D4',
  alignSelf: 'center',
  transition: '0.2s',
  cursor: 'pointer',
  $nest: {
    '&:hover': {
      color: '#555',
      height: '2em',
      width: '2em',
    },
  },
});
