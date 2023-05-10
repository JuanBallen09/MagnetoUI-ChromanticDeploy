import styled, { css } from 'styled-components'
import { IDrawer } from './Drawer.interface'
import { screenSize } from '../../../../constants/responsive.constants'

const toggleDrawer = ({ isOpen = false }) => {
  if (isOpen) {
    return css<IDrawer>`
      ${(props) => props.direction}: 0;
    `
  }
}

export const withStyles = (c: React.FC<IDrawer>): React.FC<IDrawer> => styled(c)`
  & > aside {
    background-color: white;
    padding: 20px;
    ${(props) => props.direction}: -100%;
    top: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    @media (min-width: ${screenSize.md}px) {
      width: ${(props) => (props.width ? props.width : 370)}px;
    }
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.1);
    z-index: 99;
    transition: all 0.6s ease-in-out;
    .btnClose-MG-UI {
      position: absolute;
      right: 2px;
      top: 20px;
      background: none;
      border: none;
      cursor: pointer;
      & > svg {
        transform: rotate(45deg);
        width: 25px;
        height: 25px;
      }
    }
    ${(props) => toggleDrawer(props)}
  }
  & > span {
    position: fixed;
    background-color: black;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 90;
    cursor: pointer;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.7;
    }
  }
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.7;
    }
  }
`
