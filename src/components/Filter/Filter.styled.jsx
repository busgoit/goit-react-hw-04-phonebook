import styled from '@emotion/styled';

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const FilterLabel = styled.label`
  margin-bottom: 5px;
  font-size: 18px;
`;

export const FilterInput = styled.input`
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
