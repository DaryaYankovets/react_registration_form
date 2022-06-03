import styled from 'styled-components';

export const PersonalAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 11.11%;
  flex: 1;

  @media (max-width: 1300px) {
    margin-top: 0;
    justify-content: center;
  }
`;

export const PersonalAreaTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: -0.5px;
  font-family: 'ManropeSemiBold';
  text-align: center;

  @media (max-width: 767px) {
    margin: 0 auto;
  }
`;

export const BtnExit = styled.button`
    margin: 25px 0;
    padding: 14px 0;
    width: 50%;
    font-size: 16px;
    line-height: 28px;
    color: #ffffff;
    font-family: 'ManropeSemiBold';
    background: #D11A2A;
    box-shadow: 0px 20px 25px rgba(209, 26, 42, 0.15);
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: #E02535;
    }

    &:active {
        background: #D11A2A;
    }
`;

export const PersonalInformation = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: 30px;
    grid-gap: 15px;
    margin: 30px 0;

    & div {
      padding: 5px 20px;
      background: #F4F5F6;
      border-radius: 8px;
      border: none;
      font-size: 14px;
      line-height: 19px;
      color: #23262F;
    }
`;