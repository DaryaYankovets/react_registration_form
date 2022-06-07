import styled, { css } from "styled-components";
import { Field } from "formik";

export const MyInputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    width: ${({ widthContainer }) => widthContainer === '100' ? '100%' : 'calc(50% - 10.5px)'};
`;

export const StyledLabel = styled.label`
    margin-bottom: 13px;
    font-size: 13px;
    line-height: 18px;
    color: #777E90;
`;

export const StyledInput = styled(Field)`
    padding: 17px 20px 18px;
    background: #F4F5F6;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 19px;
    color: #23262F;
    cursor: pointer;
    border: ${({ existedinn }) => existedinn === 'true' ? '1px solid #D11A2A' : '1px solid #F4F5F6'}; 
    letter-spacing: ${({ type }) => type === 'password' ? '3px' : 'none'};  

    &:focus {
        outline: none;
    }

    &:-webkit-autofill {
        transition: background-color 600000s 0s, color 600000s 0s;
    }

    ${({ error }) =>
        error &&
        css`
        border: 1px solid #D11A2A;
        outline: none;
    `}
`;

export const Star = styled.span`
    &::after {
        content: '*';
        color: #D11A2A;
    }
`;

export const ErrorMessage = styled.div`
    position: absolute;
    z-index: 3;
    bottom: -15px;
    left: 0;
    font-size: 10px;
    color: #D11A2A;
    font-family: 'ManropeMedium';
`;