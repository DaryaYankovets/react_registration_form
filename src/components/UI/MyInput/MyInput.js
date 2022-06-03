import React from 'react'
import InputMask from 'react-input-mask';
import {
    MyInputContainer,
    StyledLabel,
    StyledInput,
    Star,
    ErrorMessage,
} from './MyInputStyled.js';

export default function MyInput({
    label, 
    id, 
    name, 
    value, 
    type, 
    required=true, 
    isMask = null, 
    mask = null, 
    widthContainer,
    onChange,
    validate=null,
    error,
    hiddenPassword=null,
    existedinn=false,
    }) {

    return (
    <MyInputContainer widthContainer={widthContainer}>
        <StyledLabel htmlFor={id}>
            {
                required ? <>{label} <Star/></> : label
            }
        </StyledLabel>
        
        {
            isMask
            ? 
            <InputMask mask='+7 (999) 999 99 99' value={value} onChange={onChange}>
                {(inputProps) => (
                <StyledInput
                    {...inputProps}
                    id={id} 
                    name={name}
                    type={type}
                    validate={validate}
                    error={error}
                />
                )}
            </InputMask> 
            :
            <StyledInput
                id={id} 
                type={hiddenPassword ? 'text' : type} 
                name={name} 
                validate={validate}
                value={value}
                onChange={onChange}
                error={error}
                existedinn={existedinn.toString()}
            />
        }

        {
            error
            ?
            <ErrorMessage>{error}</ErrorMessage> 
            : 
            null
        }
        
    </MyInputContainer>
  )
}