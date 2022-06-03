import React, {useContext} from 'react'
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import PersonalArea from '../PersonalArea/PersonalArea';
import {CurrentUserContext} from '../../context/CurrentUserContext.js';
import {
    RegistrationUsersContainer,
  RegistrationFormImage,
  ImageBg,
  ImageWoman,
} from './RegistrationUsersStyled.js';


export default function RegistrationUsers () {

    const { currentUser } = useContext(CurrentUserContext);

    return (
        <RegistrationUsersContainer>

            {
                currentUser
                ? 
                <PersonalArea currentUser={currentUser}/>
                :
                <RegistrationForm/>
            }

            <RegistrationFormImage>
                <ImageBg src={require('../../assets/image/registration-image-bg.png')} alt="registration image bg" />
                <ImageWoman src={require('../../assets/image/registration-image-woman.png')} alt="registration image woman" />
            </RegistrationFormImage>

        </RegistrationUsersContainer>
  )
}