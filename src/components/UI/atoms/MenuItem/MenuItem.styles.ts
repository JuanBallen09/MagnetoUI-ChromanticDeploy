import styled, { css } from 'styled-components'
import { IMenuItem } from './MenuItem.interface'
import { screenSize } from '../../../../constants/responsive.constants'

const isActiveLink = ({ isActive = false }: IMenuItem) => {
  if (isActive) {
    return css`
      background-color: ${(props) => props.theme.colors.disabledColors.gray2};
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.disabledColors.gray2};
      }
      svg {
        opacity: 1;
      }
      p {
        margin-left: 25px;
      }
    `
  }
}

export const withStyles = (c: React.FC<IMenuItem>): React.FC<IMenuItem> => styled(c)`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  height: 30px;
  padding: 2px;
  margin-bottom: 5px;
  @media (min-width: ${screenSize.xs}px) {
    height: 40px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.disabledColors.gray};
    svg {
      opacity: 1;
    }
    p {
      margin-left: 25px;
    }
  }

  svg {
    height: 20px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  p {
    position: absolute;
    color: ${(props) => props.theme.colors.textColors.black};
    transition: all 0.3s ease-in-out;
    font-size: 14px;
  }

  ${(props) => isActiveLink(props)}
`
