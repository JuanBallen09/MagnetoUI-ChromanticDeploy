import styled from 'styled-components'
import { IMainButton } from './MainButton.interface'

export const withStyles = (c: React.FC<IMainButton>): React.FC<IMainButton> => styled(c)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  border-radius: 50px;
  background-color: ${(props) => props.btnColor};
  color: ${(props) => props.textColor};
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  &:hover {
    filter: brightness(0.9);
  }

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    margin: 0px;
  }

  &.small {
    padding: 8px 16px;
    p {
      font-size: 12px;
      line-height: 15px;
    }
  }

  &.medium {
    padding: 10px 20px;
    p {
      font-size: 14px;
      line-height: 17px;
    }
  }

  &.large {
    padding: 12px 24px;
    p {
      font-size: 16px;
      line-height: 19px;
    }
  }

  &.full {
    width: 100%;
    padding: 12px 24px;
    p {
      font-size: 16px;
      line-height: 19px;
    }
  }

  ${(props) => {
    switch (props.btnSize) {
      case 'small':
        return `
          &.small;
        `
      case 'medium':
        return `
          &.medium;
        `
      case 'large':
        return `
          &.large;
        `

      case 'full':
        return `
            &.full;
          `
      default:
        return `
          &.medium;
        `
    }
  }}
`
