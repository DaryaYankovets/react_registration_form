import styled from 'styled-components';

export const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 13px;
    line-height: 154%;
    color: #777E90;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        align-items: flex-start;
        width: 290px;
    }
`;

export const StyledCheckbox = styled.input`
    margin-left: 20px;
    width: 20px;
    height: 20px;
    position: absolute; 
    cursor: pointer;
    opacity: 0;
`;

export const Checkbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border-radius: 3px;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: flex-start;
    background-color: ${({ check }) => check ? '#06B966' : 'none'};
    border: ${({ check }) => check ? '1px solid #06B966' : '1px solid #777E90'};
`;