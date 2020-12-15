import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 700px;
  margin: 0 auto;

  img {
    height: 25px;
  }
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.6s;
    &:hover {
      margin-right: 10px;
      span {
        color: #8f8f8f;
        font-size: 18px;
      }
      .Arrow {
        color: #8f8f8f;
        margin-right: 12px;
      }
    }
    .Arrow {
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 510px;
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
    margin-top: 10px;
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
