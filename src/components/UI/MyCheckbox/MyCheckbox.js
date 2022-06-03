import React, {useState} from 'react'
import { Field } from "formik";
import {
    StyledLabel,
    CheckboxContainer,
    StyledCheckbox,
    Checkbox,
} from './MyCheckboxStyled.js';


export default function MyCheckbox(props) {

    const [check, setCheck] = useState(false);

    return (
        <CheckboxContainer>
            <Field name={props.name}>
                {({ field, form }) => {
                    const handleCheck = () => {
                        form.setFieldValue(props.name, !check)
                        props.onCheck();
                        setCheck(!check);
                    }
                    return (
                        <>
                            <Checkbox 
                                check={check}
                                onClick={handleCheck}>
                                {
                                    check && <img src={require('../../../assets/image/cheked.png')} alt="check" />
                                }
                                
                            </Checkbox>

                            <StyledLabel 
                                htmlFor={props.id} 
                                onClick={handleCheck}>
                                    {props.label}
                            </StyledLabel>

                            <StyledCheckbox
                                {...field}
                                id={props.id}
                                type="checkbox"
                            />
                        </>    
                    )                                           
                }}
            </Field>
        </CheckboxContainer>
    )
}




