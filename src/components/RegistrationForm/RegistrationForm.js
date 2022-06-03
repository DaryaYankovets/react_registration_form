import React, {useState, useContext} from 'react'
import MyInput from '../UI/MyInput/MyInput';
import MyCheckbox from '../UI/MyCheckbox/MyCheckbox.js';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { getLSData, setLSData } from '../../localstorage/localstorage.js';
import {CurrentUserContext} from '../../context/CurrentUserContext.js';
import {RegistrationBlock,
  RegistrationTitle,
  RegistrationBlockForm,
  InputContainers,
  InputContainer,
  ErrorMessageInn,
  FormButton,
  Star,
  BtnShowPassword
} from './RegistrationFormStyled.js';
import iconShowPassword from '../../assets/image/closePassword.svg';
import iconClosePassword from '../../assets/image/showPassword.svg';


export default function RegistrationForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);

  const [user, setUser] = useState({
    firstname: '',
    secondname: '',
    email: '',
    phone: '',
    password: '',
    inn: null,
    subscribe: false,
  });

  const [existedinn, setExistedinn] = useState(false); 
  const [checkSubscribe, setCheckSubscribe] = useState(false);

  const validateExistedInn = () => {
    const allUsers = getLSData('allUsers');

    if (allUsers) {
      allUsers?.forEach(u => {
        if (u.inn === user?.inn) {
          setExistedinn(true);
          return;
        } 
      });
    }
  }

  const handleCheck = () => {
    checkSubscribe ? setCheckSubscribe(false) : setCheckSubscribe(false);
  }

  const validateInn = (value) => {
    let error;
    if (value.length !== 9) {
      error = "ИНН должен состоять из 9 чисел";
      setExistedinn(false);
    } else if (!/^[0-9]+$/.test(value)) {
      error = "ИНН должен состоять только из чисел";
      setExistedinn(false);
    } else {
      validateExistedInn();
    }
    return error;
  }

  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Некорректное имя")
      .required("Введите имя"),
    secondname: Yup.string()
      .min(2, "Некорректная фамилия")
      .required("Ведите фамилию"),
    email: Yup.string()
      .email("Email введен некорректно")
      .required("Введите email"),
    password: Yup.string()
      .min(6, "Пароль должен состоять минимум из 6 символов")
      .required("Введите пароль"),
  });  

  const registrationNewUser = (values) => {
    const allUsers = getLSData('allUsers') || [];
    allUsers.push(values);
    setLSData('allUsers', allUsers);
    setLSData('activeUser', values);
    setCurrentUser(values);
  }

  const [hiddenPassword, setHiddenPassword] = useState(false);
  const showPassword = () => {
    setHiddenPassword(!hiddenPassword);
  }

  return (
      <Formik
        initialValues={{
          firstname: '',
          secondname: '',
          email: '',
          phone: '',
          password: '',
          inn: '',
          subscribe: false,
        }}
      
        validationSchema={validationSchema}

        onSubmit={(values, actions) => {

          registrationNewUser(values);

          const timeOut = setTimeout(() => {
            actions.setSubmitting(false);
            actions.resetForm();
            clearTimeout(timeOut);
          }, 1000);
        }}

        validate={(values) => {        
          setUser(values);
        }}
      >
      {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          isValid,
          handleChange
        }) => {
          return (

          <RegistrationBlock>
            <RegistrationBlockForm onSubmit={handleSubmit} autoComplete='off'>
              <RegistrationTitle>Регистрация</RegistrationTitle> 

                <InputContainers>
                  <InputContainer>
                    <MyInput
                        label='Имя'
                        id='firstname'
                        name='firstname'
                        type="text"
                        value={values.firstname}
                        onChange={handleChange}
                        error={touched.firstname && errors.firstname}
                    />

                    <MyInput
                        label='Фамилия'
                        id='secondname'
                        name='secondname'
                        type="text"
                        value={values.secondname}
                        onChange={handleChange}
                        error={touched.secondname && errors.secondname}
                    />
                  </InputContainer>

                  <InputContainer>
                    <MyInput
                        label='Email'
                        id='email'
                        name='email'
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        error={touched.email && errors.email}
                    />

                    <MyInput
                        isMask={true}
                        label='Телефон'
                        id='phone'
                        name='phone'
                        type='tel'
                        onChange={handleChange}
                    />
                  </InputContainer>

                  <MyInput 
                    label='Пароль'
                    id='password'
                    name='password'
                    type='password'
                    widthContainer='100'
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && errors.password}
                    hiddenPassword={hiddenPassword}
                  />

                  <MyInput 
                    label='ИНН'
                    id='inn'
                    name='inn'
                    type='inn'
                    widthContainer='100'
                    value={values.inn}
                    onChange={handleChange}
                    error={touched.inn && errors.inn}
                    validate={validateInn}
                    existedinn={existedinn}
                  />

                  <ErrorMessageInn existedinn={existedinn}>
                    Ваша компания уже зарегистрирована, пожалуйста обратитесь к менеджеру вашего аккаунта или <a href='mailto:yankovets.daria@gmail.com?subject=Поздравляем!&body=Добрый день! Дарья, вы проделали хорошую работу, поэтому было принято решение предложить Вам присоединиться к нашей замечательной команде! Поздравляем!' target="_blank" rel="noreferrer">напишите нам</a>
                  </ErrorMessageInn> 


                  <BtnShowPassword onClick={showPassword} type='button'>     
                    {
                      hiddenPassword
                      ?
                      <img src={iconClosePassword} alt="close password" />    
                      :
                      <img src={iconShowPassword} alt="show password" />                
                    }                                   
                  </BtnShowPassword>
                  
                </InputContainers>

                <p><Star/> - обязательные поля</p>

                <MyCheckbox
                  label='Да, я хочу получать письма с новостями и предложениями'
                  id='subscribe'
                  name='subscribe'
                  onCheck={handleCheck}
                  onChange={handleChange}
                />
                
                <FormButton type="submit" disabled={!isValid || isSubmitting || existedinn}>
                  Далее
                </FormButton>

            </RegistrationBlockForm>
          </RegistrationBlock>
        )}}
      </Formik>
  )
}