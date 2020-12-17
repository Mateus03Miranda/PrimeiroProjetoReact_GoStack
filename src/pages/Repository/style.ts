import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  img {
    height: 25px;
  }
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    transition: 0.6s;
    &:hover {
      margin-right: 10px;
      span {
        color: #8f8f8f;
        font-size: 18px;
      }
      .LeftArrow {
        color: #8f8f8f;
        margin-right: 12px;
      }
    }
    .LeftArrow {
      color: #a8a8b3;
      margin-right: 6px;
      transition: 0.6s;
    }
    span {
      color: #a8a8b3;
      transition: 0.3s;
    }
  }
`;

export const Section = styled.section`
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  max-width: 510px;
  .avatar {
    display: flex;
    align-items: center;
    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }

    .profile {
      display: flex;
      flex-direction: column;
      margin-left: 13px;
      flex-wrap: wrap;
      .name {
        font-size: 36px;
        color: #3d3d4d;
      }
      .description {
        font-size: 20px;
        color: #3d3d4d;
      }
    }
  }

  .repoStatistics {
    display: flex;
    margin-top: 20px;
    justify-content: space-around;

    .Statistics {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        font-size: 36px;
        color: #3d3d4d;
        font-weight: bold;
      }

      span {
        font-size: 20px;
        color: #3d3d4d;
      }
    }
  }
`;

export const List = styled.a`
  width: 950px;
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  border-radius: 10px;
  transition: 0.4s;
  text-decoration: none;
  section {
    margin: 28px 0px 27px 24px;
    transition: 0.4s;
    p {
      font-size: 24px;
      color: #3d3d4d;
      font-weight: bold;
      transition: 0.4s;
    }
    span {
      transition: 0.4s;
      margin-top: 8px;
      font-size: 18px;
      color: #a8a8b3;
    }
  }
  &:hover {
    border-radius: 0px;
    background-color: #f9f9f9;
    section {
      margin: 32px 0px 31px 28px;
      span {
        font-size: 20px;
      }
      p {
        font-size: 26px;
      }
    }
  }
  .RightArrow {
    margin-right: 30px;

    width: 1.5em;
    height: 1.5em;
    color: #c9c9d4;
    transition: 0.6s;
    cursor: pointer;
    &:hover {
      width: 2.5em;
      height: 2.5em;
      color: #555;
      margin-right: 10px;
    }
  }
`;
