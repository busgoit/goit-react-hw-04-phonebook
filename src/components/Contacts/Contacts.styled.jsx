import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  margin: 0 30px 0 40px;
  padding: 0;
  list-style: none;
`;

export const Contact = styled.li`
  display: flex;
  flex-wrap: nowrap;

  margin-bottom: 10px;
`;

export const Name = styled.span`
  font-size: 20px;
  font-weight: semibold;
`;

export const Number = styled.span`
  font-size: 16px;

  display: flex;
  flex-grow: 1;
  align-items: flex-end;

  &::before {
    content: '';
    margin-left: 6px;
    margin-right: 6px;
    flex-grow: 1;
    height: 1px;
    background-color: rgba(157, 164, 189, 0.8);
  }
`;

export const Info = styled.span`
  font-size: 16px;
`;

export const Button = styled.button`
  width: 40px;
  height: 20px;

  margin-left: 20px;

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
    color: red;
  }

  &:active {
    opacity: 1;
    background: #e0e0e0;
    box-shadow: inset 11px 11px 23px #b1b1b1, inset -11px -11px 23px #ffffff;
  }
`;
