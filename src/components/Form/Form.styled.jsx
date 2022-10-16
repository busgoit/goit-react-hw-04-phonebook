import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 5px;
  font-size: 18px;
`;

export const FormInput = styled.input`
  margin-bottom: 5px;
  height: 40px;
  padding: 10px 25px;
  font-size: 16px;
  border-radius: 10px;

  box-sizing: border-box;

  border: none;
  background: #e0e0e0;
  box-shadow: inset 11px 11px 23px #b1b1b1, inset -11px -11px 23px #ffffff;
  outline: none;

  :focus {
    border: 1px solid rgba(33, 33, 33, 0.35);
  }
`;

export const SubmitButton = styled.button`
  min-width: 80px;
  height: 40px;

  margin: 20px auto 0 auto;
  padding: 5px 20px;

  font-size: 18px;

  border: none;
  border-radius: 10px;

  cursor: pointer;

  outline: none;

  transition: 0.2s ease-in-out;

  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 11px 11px 23px #b1b1b1, -11px -11px 23px #ffffff;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 1;
    background: #e0e0e0;
    box-shadow: inset 11px 11px 23px #b1b1b1, inset -11px -11px 23px #ffffff;
    color: #48d860;
  }
`;
