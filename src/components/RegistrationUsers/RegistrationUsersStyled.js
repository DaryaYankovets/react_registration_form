import styled from 'styled-components';

export const RegistrationUsersContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
`;

export const RegistrationFormImage = styled.div`
  position: relative;
  width: 48.47%;
  height: auto;
  background: #F4F5F6;

  @media (min-width: 1600px) { 
    height: 100vh;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ImageBg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ImageWoman = styled.img`
  position: absolute;
  z-index: 3;
  top: 259px;
  left: 18.768%;
  width: 61.338%;
  height: auto;

  @media (max-width: 912px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;