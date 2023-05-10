import styled, { css } from 'styled-components'
import { ITabButton } from './TabButton.interface'

export const withStyles = (c: React.FC<ITabButton>): React.FC<ITabButton> => styled(c)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 96px;
  height: 18px;
  padding: 2px 8px;
  background: ${(props) => props.color};
  border-radius: 6px;
  ${({ boxShadow }) =>
    boxShadow &&
    css`
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    `}

  p {
    margin: 0%;
    color: ${(props) => props.textColor};
    font-weight: ${(props) => props.textWeight};
    font-size: ${(props) => props.size};
    line-height: 14px;

    :hover {
      color: ${(props) => props.theme.colors.black};
    }
  }
`
