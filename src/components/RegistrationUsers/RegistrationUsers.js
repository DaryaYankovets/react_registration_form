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
import imgBg from '../../assets/image/registration-image-bg.svg';
import imgWoman from '../../assets/image/registration-image-woman.svg';


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
                <ImageBg src={imgBg} alt="registration image bg" />
                <ImageWoman src={imgWoman} alt="registration image woman" />
            </RegistrationFormImage>

        </RegistrationUsersContainer>
  )
}