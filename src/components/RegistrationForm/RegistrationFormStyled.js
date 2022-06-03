import styled from 'styled-components';
import {Form} from 'formik';

export const RegistrationBlock = styled.div`
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

export const RegistrationTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: -0.5px;
  font-family: 'ManropeSemiBold';

  @media (max-width: 767px) {
    margin: 30px 0;
  }
`;

export const RegistrationBlockForm = styled(Form)`
  margin: 0 16px;
  min-width: 397.5px;
  width: 27.6vw;

  & p {
    margin: 46px 0 30px;
    font-size: 13px;
    line-height: 28px;
    color: #777E90;
  }

  @media (max-width: 767px) {
    width: 343px;
    min-width: 343px;

    & p {
      margin: 74px 0 15px;
    }
  }
`;

export const InputContainers = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ErrorMessageInn = styled.div`
  position: absolute;
  display: ${({ existedinn }) => existedinn  ? 'block' : 'none'};
  z-index: 2;
  bottom: -31px;
  left: 0;
  font-size: 13px;
  line-height: 23px;
  color: #000000;

  & a {
    color: #D11A2A;
    cursor: pointer;
    text-decoration: none;
  }

  @media (max-width: 767px) {
    bottom: -53px;
  }
`;

export const FormButton = styled.button`
  margin: 15px 0;
  padding: 14px 0;
  width: 100%;
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
    box-shadow: none;
  }

  &:disabled {
    background: #B8BABF;
    box-shadow: none;
  }

  @media (max-width: 767px) {
    margin-top: 20px;
    font-size: 14px;
  }   
`;

export const Star = styled.span`
    &::after {
        content: '*';
        color: #D11A2A;
    }
`;

export const BtnShowPassword = styled.button`
  position: absolute;
  top: 270px;
  right: 17px;
  background: #F4F5F6;;
  border: none;
  cursor: pointer;

  & img:nth-child(2) {
    filter: invert(79%) sepia(6%) saturate(20%) hue-rotate(185deg) brightness(93%) contrast(95%);
  }

  & img {
    width: 24px;
    height: 24px;
  }
`;

