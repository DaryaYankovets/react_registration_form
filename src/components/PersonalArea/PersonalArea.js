import React, {useContext, useEffect} from 'react'
import { setLSData } from '../../localstorage/localstorage.js';
import {CurrentUserContext} from '../../context/CurrentUserContext.js';
import {
  PersonalAreaContainer,
  PersonalAreaTitle,
  BtnExit,
  PersonalInformation,
} from './PersonalAreaStyled.js';


export default function PersonalArea () {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const exitFromPersonalArea = () => {
      setCurrentUser(null);
      setLSData('activeUser', null);
  }

  return (
      <PersonalAreaContainer>
          <PersonalAreaTitle>Личный кабинет</PersonalAreaTitle> 

          <PersonalInformation>
              <div>ИНН</div>
              <div>{currentUser.inn}</div>
              <div>Имя</div>
              <div>{currentUser.firstname}</div>
              <div>Фамилия</div>
              <div>{currentUser.secondname}</div>
              <div>Телефон</div>
              <div>{currentUser.phone}</div>
              <div>Email</div>
              <div>{currentUser.email}</div>
              <div>Подписка</div>
              <div>{currentUser.subscribe ? 'да' : 'нет'}</div>
          </PersonalInformation>
          
          <BtnExit onClick={exitFromPersonalArea}>Выйти</BtnExit>
      </PersonalAreaContainer>
  )
}